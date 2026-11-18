import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import BottomNav from '@/components/BottomNav';

import type { Metadata } from 'next';

const geistSans = Geist({
    variable: '--font-body',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-body',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Coy - Discover',
    description: 'Swipe based discovery experience for Coy'
}

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' className={`${geistSans.variable}, ${geistMono.variable} h-full antialiased dark`}>
            <body className='bg-zinc-950 text-zinc-100 antialiased selection:bg-rose-500 selection:text-white'>
                <div className='mx-auto flex min-h-dvh max-w-md flex-col border-x border-zinc-900 bg-zinc-950 pb-16 shadow-2xl'>
                    <header className='sticky top-0 z-30 flex h-14 items-center justify-between border-b border-zinc-900 bg-zinc-950/80 px-5 backdrop-blur-md'>
                        <span className="bg-linear-to-r from-rose-500 to-amber-500 bg-clip-text text-xl font-black tracking-tight text-transparent">
                            coy
                        </span>
                        <span className='rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-400'>
                            Discover
                        </span>
                    </header>
                    <main className='flex flex-1 flex-col'>
                        {children}
                    </main>
                    <BottomNav/>
                </div>
            </body>
        </html>
    );
}

export default RootLayout;