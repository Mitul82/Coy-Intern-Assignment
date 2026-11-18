import { cacheTag, cacheLife } from 'next/cache';

import prisma from '@/lib/prisma';

import type { SafeProfile } from '@/types';

const currentUserId = 'current_user_id';

async function getCachedFeed(): Promise<SafeProfile[]> {
    "use cache";
    cacheTag('feed-data');
    cacheLife('minutes');

    const existingSwipes = await prisma.swipe.findMany({
        where: { userId: currentUserId },
        select: { targetProfileId: true },
    });
    
    const swipedIds = existingSwipes.map((s) => s.targetProfileId);

    const profiles = await prisma.profile.findMany({
        where: {
            id: { notIn: swipedIds },
        },
        select: {
            id: true,
            name: true,
            age: true,
            photo: true,
            bio: true,
            cityOrCollege: true,
            interests: true,
        },
    });

    return profiles;
}

async function getCachedMatches(): Promise<SafeProfile[]> {
    "use cache";
    cacheTag('matches-data');
    cacheLife('minutes');

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
        },
        select: {
            id: true,
            name: true,
            age: true,
            photo: true,
            bio: true,
            cityOrCollege: true,
            interests: true
        }
    });
    
    return mutualProfiles;
}

export { getCachedFeed, getCachedMatches }