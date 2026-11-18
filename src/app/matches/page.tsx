import Link from 'next/link';
import { Suspense } from 'react';
import { MessageCircle } from 'lucide-react';

import { getCachedMatches } from '@/lib/data';

async function MatchesList() {
    const matches = await getCachedMatches();

    if(matches.length === 0) {
        return (
            <div className='flex flex-1 flex-col items-center justify-center rounded-3xl border border-zinc-900 bg-zinc-900/30 p-8 text-center'>
                <span className='text-4xl'>
                    <MessageCircle/>
                </span>

                <h2 className='mt-3 text-lg font-bold text-zinc-200'>
                    No matches yet.
                </h2>

                <p className='mt-1 max-w-xs text-sm text-zinc-500'>
                    Remember Coy&apos;s promise: likes stay completely private until both of you swipe right on each other.
                </p>

                <Link href='/' className='mt-5 rounded-full bg-rose-600 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-rose-500'>
                    Start Discovering &rarr;
                </Link>
            </div>
        );
    }

    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                matches.map((profile) => (
                    <div key={profile.id} className='group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900'>
                        <div className='aspect-3/4 w-full overflow-hidden'>
                            <img src={profile.photo} alt={profile.name} className='h-full w-full object-cover transition duration-300 group-hover:scale-105'/>
                        </div>

                        <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent'/>

                        <div className='absolute bottom-0 left-0 right-0 p-3.5'>
                            <h3 className='text-base font-bold text-white'>
                                {profile.name}, {profile.age}
                            </h3>

                            <p className='truncate text-xs text-rose-400'>
                                {profile.city_or_college}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

function MatchesPage() {
    return (
        <section className='flex flex-1 flex-col p-5'>
            <div className='mb-4'>
                <h1 className='text-2xl font-extrabold text-white'>
                    Mutual Matches
                </h1>

                <p className='text-xs text-zinc-400'>
                    People who mutually liked you back.
                </p>
            </div>

            <Suspense fallback={
                <div className='grid grid-cols-2 gap-4'>
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className='aspect-3/4 animate-pulse rounded-2xl bg-zinc-900'/>
                    ))}
                </div>
            }>
                <MatchesList/>
            </Suspense>
        </section>
    );
}

export default MatchesPage;