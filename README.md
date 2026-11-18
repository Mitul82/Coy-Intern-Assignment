# Coy — SDE Intern Assignment ("Discover" Tab)

A mobile-first, swipe-based discovery and mutual-matching prototype built for **Coy**, engineered with **Next.js 16 (App Router, Cache Components, React Compiler)**, **React 19**, **Tailwind CSS v4**, **Prisma**, and **SQLite (`better-sqlite3`)**.

---

## Part B: "Discover" Tab Architecture & Features

### Core Highlights
1. **Strict Privacy Guarantee (Zero One-Way Like Leaks):**
   * The database stores a `likedLoggedInUser` boolean on seeded profiles to simulate incoming likes.
   * However, **neither the SSR payload nor `GET /api/feed` ever selects or serializes `likedLoggedInUser` to the client**. Even if a user inspects Chrome DevTools / Network responses, it is cryptographically and structurally impossible to tell who liked them until a mutual right-swipe occurs on `POST /api/swipe`.
2. **Next.js 16 Cache Components (`"use cache"`) & SSR:**
   * Feed and mutual match queries are server-rendered and cached using Next.js Cache Components (`"use cache"`, `cacheTag`, and `cacheLife`).
   * Whenever a swipe occurs via `POST /api/swipe`, granular cache invalidation (`revalidateTag("feed-data")` and `revalidateTag("matches-data")`) ensures instant persistence across page reloads without unnecessary database hits.
3. **Zero-Dependency Touch & Pointer Physics:**
   * Smooth 60fps card dragging on mobile touchscreens and desktop mice using native Pointer Events (`setPointerCapture`), dynamic rotation, and opacity-scaled `LIKE` / `NOPE` badges, paired with accessible desktop action buttons.
4. **30 Seeded Mock Profiles:**
   * Pre-populated with diverse Indian colleges/cities, bios, interest pills, and Unsplash portraits. 10 of the 30 profiles are pre-configured to have liked the logged-in user so mutual matches trigger naturally during live demos.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 16.4 (`cacheComponents: true`, `reactCompiler: true`, Turbopack)
* **UI Library:** React 19.3 + Tailwind CSS v4 + lucide-react
* **Database:** SQLite (`better-sqlite3`)
* **ORM:** Prisma (`@prisma/client` + `@prisma/adapter-better-sqlite3`)
* **Language:** TypeScript 5

---

## 📂 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/feed` | Returns unswiped profiles for the logged-in user. Explicitly strips `likedLoggedInUser` to protect privacy. |
| `POST` | `/api/swipe` | Accepts `{ targetProfileId: string, action: "like" \| "pass" }`. Upserts the swipe in SQLite, invalidates server cache tags, and returns `{ success: true, isMatch: boolean }`. |
| `GET` | `/api/matches` | Returns only mutual matches (profiles where `action === "like"` by the user **and** `likedLoggedInUser === true`). |

---

## 💻 Local Setup Instructions

### Prerequisites
* **Node.js** v20+ (or v22/v24 with build tools for `better-sqlite3`)
* **npm**

### 1. Clone the repository & install dependencies
```bash
git clone https://github.com/Mitul82/Coy-Intern-Assignment.git

cd Coy-Intern-Assignment

npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="file:./data/dev.db"
```

### 3. Generate Prisma Client, Push Schema & Seed 30 Profiles
```bash
npx prisma generate

npx prisma db push

npx prisma db seed
```

### 4. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser (use mobile device emulation in DevTools or desktop view).

---

## 🐳 Running with Docker (Optional)

If you prefer running the application in an isolated container:

```bash
docker compose up --env-file ./.env --build
```
The app will automatically initialize the SQLite database, seed the 30 profiles, and expose the server at [http://localhost:3000](http://localhost:3000).

---

## 🧪 Testing the Demo Flow

1. **Discover Tab (`/`)**: Swipe right (`♥` or drag right) and left (`✕` or drag left) on profiles.
   * Try swiping right on **Ananya Sharma**, **Priya Nair**, **Arjun Kapoor**, or **Tanvi Joshi** to immediately trigger the **"It's a Match!"** overlay.
2. **Persistence Check**: Reload the browser page at any point—swiped profiles will never reappear in the feed.
3. **Matches Tab (`/matches`)**: View all mutual matches persisted in SQLite.
4. **Home Tab (`/home`)**: Blank placeholder tab alongside Discover as requested in the specification.