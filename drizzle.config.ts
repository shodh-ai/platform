import 'drizzle/envConfig';

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './drizzle/schema.ts',
	// @ts-expect-error
	driver: 'pg',
	dbCredentials: {
		// @ts-expect-error
		connectionString: process.env.POSTGRES_URL!,
	},
});
