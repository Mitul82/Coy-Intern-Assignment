import { NextResponse } from 'next/server';

import { getCachedFeed } from '@/lib/data';

async function GET() {
    try {
        const profiles = getCachedFeed();

        return NextResponse.json(profiles, { status: 200 });
    } catch (err: unknown) {
        console.error(err);

        return NextResponse.json({ message: 'Internal Server error' }, { status: 500 });
    }
}

export { GET }