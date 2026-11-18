import { SchoolIcon } from 'lucide-react';

import type { SafeProfile } from '@/types';

function CurrentProfile({ currentProfile, likeOpacity, passOpacity }: { currentProfile: SafeProfile, likeOpacity: number, passOpacity: number }) {
    return (
        <>
            <img src={currentProfile.photo} alt={currentProfile.name} className='h-full w-full object-cover' draggable={false}/>
                    
            <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent'/>

            <div className='pointer-events-none absolute left-6 top-6 -rotate-12 rounded-xl border-4 border-emerald-400 bg-emerald-950/60 px-4 py-1 text-2xl font-black tracking-wider text-emerald-400 backdrop-blur-sm' style={{opacity: likeOpacity}}>
                LIKE
            </div>
            <div className='pointer-events-none absolute right-6 top-6 rotate-12 rounded-xl border-4 border-rose-500 bg-rose-950/60 px-4 py-1 text-2xl font-black tracking-wider text-rose-500 backdrop-blur-sm' style={{opacity: passOpacity}}>
                PASS
            </div>

            <div className='pointer-events-none absolute bottom-0 left-0 right-0 p-6'>
                <div className='flex items-baseline gap-2'>
                    <h2 className='text-3xl font-extrabold text-white'>
                        {currentProfile.name}
                    </h2>
                    <span className='text-2xl font-medium text-zinc-300'>
                        {currentProfile.age}
                    </span>
                </div>

                <p className='mt-1 flex items-center gap-1.5 text-sm font-medium text-rose-400'>
                    <SchoolIcon/> {currentProfile.city_or_college}
                </p>

                <p className='mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-200'>
                    {currentProfile.bio}
                </p>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {currentProfile.interests.split(',').map((interest) => (
                        <span key={interest.trim()} className='rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md'>
                            {interest.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CurrentProfile;