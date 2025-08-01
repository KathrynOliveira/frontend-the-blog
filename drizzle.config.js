import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './blog-with-udemy/src/db/drizzle/migrations',
    out: './blog-with-udemy/src/db/drizzle/schemas.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: './db.sqlite3',
    },
});