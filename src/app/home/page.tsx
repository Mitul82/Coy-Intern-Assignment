import { Lock } from 'lucide-react';

function HomePage() {
    return (
        <div className='flex flex-1 flex-col items-center justify-center p-8 text-center'>
            <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-2xl'>
                <Lock/>
            </div>

            <h1 className='text-lg font-semibold text-zinc-200'>Coy Home</h1>

            <p className='mt-1 max-w-xs text-sm text-zinc-500'>
                Placeholder Home tab. Switch to the Discover tab below to explore profiles.
            </p>
        </div>
  );
}

export default HomePage;