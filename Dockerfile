FROM node:22-bookworm-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN mkdir -p /app/data

ARG DATABASE_URL="file:./data/dev.db"
ENV DATABASE_URL=${DATABASE_URL}

RUN npx prisma generate

RUN npx prisma db push

RUN npx prisma db seed

RUN npm run build

FROM node:22-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

ENV DATABASE_URL=${DATABASE_URL}

RUN addgroup --system --gid 1001 nodejs

RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs /app/.next/server ./.next/server

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY --from=builder --chown=nextjs:nodejs /app/data ./data

USER nextjs

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

CMD ["node", "server.js"]