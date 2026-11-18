'use client';

import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { StarsIcon, Heart } from 'lucide-react';

import CurrentProfile from './CurrentProfile';

import type { SafeProfile } from '@/types';

function SwipeDeck({ initialProfiles }: { initialProfiles: SafeProfile[] }) {
    const router = useRouter();

    const [isDragging, setIsDragging] = React.useState<boolean>(false);
    const [dragOffset, setDragOffset] = React.useState({ x: 0, y: 0 });
    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
    const [profiles, setProfiles] = React.useState<SafeProfile[]>(initialProfiles);
    const [matchedProfile, setMatchedProfile] = React.useState<SafeProfile | null>(null);
    const [exitDirection, setExitDirection] = React.useState<'left' | 'right' | null>(null);

    const nextProfile = profiles[1];
    const currentProfile = profiles[0];
    const startPos = React.useRef({ x: 0, y: 0 });

    const swipeThreshold = 100; // * amount to trigger the swipe api call on release

    const triggerSwipe = async (direction: 'left' | 'right') => {
        if(!currentProfile || isSubmitting || exitDirection) {
            return;
        }

        setIsSubmitting(true);
        setExitDirection(direction);
        const swipedProfile = currentProfile;
        const action = direction === 'right' ? 'like' : 'pass';

        try {
            const { data } = await axios.post('/api/swipe', {
                targetProfileId: swipedProfile.id,
                action
            });

            setTimeout(() => {
                setProfiles((prev) => prev.slice(1));

                setExitDirection(null);

                setDragOffset({ x: 0, y: 0 });

                setIsSubmitting(false);
        
                if (data.isMatch) {
                  setMatchedProfile(swipedProfile);
                }

                router.refresh(); // * sync the SSR cache in the background
              }, 260);
        } catch (err: unknown) {
            console.error('Failed to record swipe: ', err);

            setExitDirection(null);

            setDragOffset({ x: 0, y: 0 });

            setIsSubmitting(false);
        }
    }

    const handlePointerDown = (e: React.PointerEvent) => {
        if (exitDirection || isSubmitting) {
            return;
        }

        setIsDragging(true);

        startPos.current = { x: e.clientX, y: e.clientY };

        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) {
            return;
        }

        const deltaX = e.clientX - startPos.current.x;

        const deltaY = (e.clientY - startPos.current.y) * 0.35;

        setDragOffset({ x: deltaX, y: deltaY });
    }

    const handlePointerUp = () => {
        if (!isDragging) {
            return;
        }

        setIsDragging(false);
    
        if (dragOffset.x > swipeThreshold) {
          triggerSwipe('right');
        } else if (dragOffset.x < -swipeThreshold) {
          triggerSwipe('left');
        } else {
          setDragOffset({ x: 0, y: 0 });
        }
    }

    if (!currentProfile) {
        return (
            <div className='flex h-135 flex-col items-center justify-center rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 text-center'>
                <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 text-3xl'>
                    <StarsIcon/>
                </div>
                <h2 className='text-xl font-bold text-zinc-100'>You&apos;re all caught up!</h2>
                <p className='mt-2 max-w-xs text-sm text-zinc-400'>
                    You have swiped through everyone in your feed. Check your Matches tab to see mutual connections.
                </p>
            </div>
        );
    }

    const translateX = exitDirection === 'right' ? 420 : exitDirection === 'left' ? -420 : dragOffset.x;
    const translateY = exitDirection ? 40 : dragOffset.y;
    const rotate = translateX * 0.05;
    const likeOpacity = Math.min(Math.max(translateX / 100, 0), 1);
    const passOpacity = Math.min(Math.max(-translateX / 100, 0), 1);

    return (
        <div className='relative flex flex-col items-center'>
            <div className='relative h-130 w-full select-none'>
                {
                    nextProfile && (
                        <div className='pointer-events-none absolute inset-0 scale-[0.95] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 opacity-60 transition-transform duration-300'>
                            <img src={nextProfile.photo} alt={nextProfile.name} className='h-full w-full object-cover'/>

                            <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent'/>
                        </div>
                    )
                }

                <div onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp} className='relative h-full w-full cursor-grab overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl active:cursor-grabbing' style={{transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg)`, transition: isDragging ? 'none' : 'transform 0.26s cubic-bezier(0.2, 0.8, 0.2, 1)', touchAction: 'none'}}>
                    <CurrentProfile currentProfile={currentProfile} likeOpacity={likeOpacity} passOpacity={passOpacity}/>
                </div>
            </div>

            <div className='mt-5 flex items-center justify-center gap-8 z-10'>
                <button type='button' onClick={() => triggerSwipe('left')} disabled={isSubmitting} aria-label='Pass' className='flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-2xl text-rose-500 shadow-lg transition hover:scale-110 hover:border-rose-500/50 hover:bg-rose-500/10 active:scale-95 disabled:opacity-50'>
                    X
                </button>

                <button type='button' onClick={() => triggerSwipe('right')} disabled={isSubmitting} aria-label='Like' className='flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-tr from-rose-600 to-amber-500 text-2xl text-white shadow-lg shadow-rose-600/30 transition hover:scale-110 active:scale-95 disabled:opacity-50'>
                    <Heart/>
                </button>
            </div>

            {
                matchedProfile && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-md animate-in fade-in duration-200'>
                        <div className='flex w-full max-w-sm flex-col items-center rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center shadow-2xl'>
                            <span className='text-xs font-bold uppercase tracking-widest text-rose-400'>
                                Mutual Connection
                            </span>

                            <h2 className='mt-1 bg-linear-to-r from-rose-400 to-amber-400 bg-clip-text text-4xl font-black italic text-transparent'>
                                It&apos;s a Match!
                            </h2>

                            <p className='mt-2 text-sm text-zinc-400'>
                                You and <span className='font-semibold text-white'>{matchedProfile.name}</span> both liked each other.
                            </p>

                            <div className='my-6 h-32 w-32 overflow-hidden rounded-full border-4 border-rose-500 shadow-xl'>
                                <img src={matchedProfile.photo} alt={matchedProfile.name} className='h-full w-full object-cover'/>
                            </div>

                            <div className='flex w-full flex-col gap-3'>
                                <button type='button' onClick={() => { setMatchedProfile(null); router.push('/matches');}} className='w-full rounded-full bg-linear-to-r from-rose-500 to-amber-500 py-3.5 text-sm font-bold text-white shadow-lg'>
                                    View in Matches
                                </button>
                                
                                <button type='button' onClick={() => setMatchedProfile(null)} className='w-full rounded-full border border-zinc-800 bg-zinc-950 py-3.5 text-sm font-semibold text-zinc-300 hover:bg-zinc-800'>
                                    Keep Swiping
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default SwipeDeck;