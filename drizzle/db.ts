import 'drizzle/envConfig';

import { drizzle } from 'drizzle-orm/vercel-postgres';

import { sql } from '@vercel/postgres';

import * as schema from './schema';

type User = typeof schema.JobDescriptionsTable.$inferInsert;

export const db = drizzle(sql, { schema });

export const addNewJob = async (user: User) => {
	const result = await db.insert(schema.JobDescriptionsTable).values(user).returning({
		id: schema.JobDescriptionsTable.id,
	});

	return result;
};
