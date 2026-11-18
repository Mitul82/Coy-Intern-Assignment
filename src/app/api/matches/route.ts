import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

const currentUserId = 'current_user_id';

async function GET() {
    try {
        const userLikes = await prisma.swipe.findMany({
            where: {
                userId: currentUserId,
                action: 'like'
            },
            select: { targetProfileId: true }
        });

        const likedProfileIds = userLikes.map((s) => s.targetProfileId);

        const mutualProfiles = await prisma.profile.findMany({
            where: {
                id: { in: likedProfileIds },
                likedLoggedInUser: true
            }
        });

        return NextResponse.json({ matches: mutualProfiles }, { status: 200 });
    } catch (err: unknown) {
        console.error(err);

        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

export { GET }