import { Suspense } from 'react';

import { getCachedFeed } from '@/lib/data';
import SwipeDeck from '@/components/SwipeDeck';

async function CachedFeedWrapper() {
    const initialProfiles = await getCachedFeed();

    return <SwipeDeck initialProfiles={initialProfiles} />;
}

function DiscoverPage() {
    return (
        <section className='flex flex-1 flex-col justify-center overflow-hidden p-4'>
            <Suspense
                fallback={
                    <div className='h-135 w-full animate-pulse rounded-3xl bg-zinc-900' />
                }
            >
                <CachedFeedWrapper/>
            </Suspense>
        </section>
    );
}

export default DiscoverPage;