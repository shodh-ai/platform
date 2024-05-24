import 'drizzle/envConfig';

import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import { sql } from '@vercel/postgres';

import * as schema from './schema';

type User = typeof schema.JobDescriptionsTable.$inferInsert;

export const db = drizzle(sql, { schema });

export const addNewJob = async (user: User) => {
	const jdTable = schema.JobDescriptionsTable;

	const result = await db.insert(jdTable).values(user).returning({
		id: jdTable.id,
	});

	return result;
};

export const getJobData = async (id: number) => {
	const jdTable = schema.JobDescriptionsTable;

	const result = await db.select().from(jdTable).where(eq(jdTable.id, id));

	if (result) return result[0];
	return null;
};
