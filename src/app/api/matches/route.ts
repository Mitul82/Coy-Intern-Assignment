import { NextResponse } from 'next/server';

import { getCachedMatches } from '@/lib/data';

async function GET() {
    try {
        const mutualProfiles = getCachedMatches();

        return NextResponse.json({ matches: mutualProfiles }, { status: 200 });
    } catch (err: unknown) {
        console.error(err);

        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

export { GET }