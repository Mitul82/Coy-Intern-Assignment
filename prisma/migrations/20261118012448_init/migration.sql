-- CreateTable
CREATE TABLE "profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "city_or_college" TEXT NOT NULL,
    "interests" TEXT NOT NULL,
    "likedLoggedInUser" BOOLEAN NOT NULL
);
