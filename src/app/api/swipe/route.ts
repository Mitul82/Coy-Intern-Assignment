import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

const currentUserId = 'current_user_id';

async function POST(req: Request) {
    try {
        const { targetProfileId, action } = await req.json();
       
        if(!targetProfileId || !['like', 'pass'].includes(action)) {
            return NextResponse.json({ message: 'Invalid parameters' }, { status: 400 });
        }

        await prisma.swipe.upsert({
            where: {
                userId_targetProfileId: {
                    userId: currentUserId,
                    targetProfileId
                },
            },
            update: { action },
            create: {
                userId: currentUserId,
                targetProfileId,
                action
            }
        });
    } catch (err: unknown) {
        console.error(err);

        return NextResponse.json({ message: 'Internal server error' }, { status: 200 });
    }
}

export { POST }