# Next.js + NextAuth ver.5 Magic Link Auth with middleware sample

This is Next.js project bootstrapped with create-next-app.

## Configuration

- Next.js: 15.0.0-canary.66
  - React: 19.0.0-rc-df5f2736-20240712
- NextAuth: 5.0.0-beta.19
- drizzele-orm: 0.32.0 (drizzle-kit 0.23.0)
- PostgreSQL
- Resend

## Getting Started

1. install

   ```
   pnpm add
   ```

2. configure
   add your `.env`.

   ```
   cp env.sample .env
   ```

   and set.

3. run db

   ```
   docker compose up -d
   ```

4. DB migration

   ```
   pnpm exec drizzle-kit generate
   pnpm exec drizzle-kit push
   ```

5. run

   ```
   pnpm dev
   ```
