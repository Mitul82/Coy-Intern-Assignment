import "dotenv/config";

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../src/generated/prisma/client";
import seedProfiles from "../src/data/seedData";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL must be set to seed the SQLite database.");
}

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({ url: databaseUrl }),
});

const profiles = seedProfiles.map(({ city_or_college, ...profile }) => ({
  ...profile,
  cityOrCollege: city_or_college,
}));

try {
  await prisma.$transaction(
    profiles.map((profile) =>
      prisma.profile.upsert({
        where: { id: profile.id },
        create: profile,
        update: profile,
      }),
    ),
  );
} finally {
  await prisma.$disconnect();
}
