import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

const currentUserId = 'current_user_id';

async function GET() {
    try {
        const existingSwipes = await prisma.swipe.findMany({
            where: { userId: currentUserId },
            select: { targetProfileId: true }
        });

        const swipedIds = existingSwipes.map((s) => s.targetProfileId);

        const profiles = await prisma.profile.findMany({
            where: { id: { notIn: swipedIds } }
        });

        return NextResponse.json(profiles, { status: 200 });
    } catch (err: unknown) {
        console.error(err);

        return NextResponse.json({ message: 'Internal Server error' }, { status: 500 });
    }
}

export { GET }