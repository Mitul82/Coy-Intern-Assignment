-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Swipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "targetProfileId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Swipe" ("action", "createdAt", "id", "targetProfileId", "userId") SELECT "action", "createdAt", "id", "targetProfileId", "userId" FROM "Swipe";
DROP TABLE "Swipe";
ALTER TABLE "new_Swipe" RENAME TO "Swipe";
CREATE UNIQUE INDEX "Swipe_userId_targetProfileId_key" ON "Swipe"("userId", "targetProfileId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
