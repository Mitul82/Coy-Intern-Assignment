'use client';

import Link from 'next/link';
import { Home, SearchIcon, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

function BottomNav() {
    const pathName = usePathname();

    const tabs = [
        { name: 'Home', href: '/home', icon: <Home/> },
        { name: 'Dicover', href: '/', icon: <SearchIcon/> },
        { name: 'Matches', href: '/matches', icon: <Users/> }
    ]

    return (
        <nav className='fixed bottom-0 left-0 right-0 z-40 mx-auto max-w-md border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md'>
            <div className='flex h-16 items-center justify-around px-4'>
                {tabs.map((tab) => {
                    const isActive = pathName === tab.href;

                    return (
                        <Link key={tab.name} href={tab.href} className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors ${isActive ? 'text-rose-500' : 'text-zinc-400 hover:text-zinc-200'}`}>
                            <span className='text-lg'>{tab.icon}</span>
                            <span>{tab.name}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

export default BottomNav;