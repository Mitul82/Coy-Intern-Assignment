import 'dotenv/config';

import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

import seedProfiles from '../src/data/seedData';
import { PrismaClient } from '../src/generated/prisma/client';

const databaseUrl = process.env.DATABASE_URL || 'file:./dev.db';
const connectionString = databaseUrl.startsWith('file:') ? databaseUrl.slice('file:'.length) : databaseUrl;
const prisma = new PrismaClient({
	adapter: new PrismaBetterSqlite3({ url: connectionString }),
});

const profiles = seedProfiles.map(
	({ city_or_college, ...profile }, index) => ({
    	...profile,
    	id: `seed-profile-${index + 1}`,
    	cityOrCollege: city_or_college,
  	}),
);

async function main() {
	for (const profile of profiles) {
    	await prisma.profile.upsert({
    		where: { id: profile.id },
    		create: profile,
    		update: profile,
    	});
  	}
}

try {
	await main();
	console.log('Seeded profiles successfully.');
} catch (error) {
	console.error('Failed to seed profiles:', error);
	process.exitCode = 1;
} finally {
	await prisma.$disconnect();
}