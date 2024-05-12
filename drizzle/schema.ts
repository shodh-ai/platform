import { pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

export const JobDescriptionsTable = pgTable(
	'job_descriptions',
	{
		id: serial('id').primaryKey(),
		title: text('title').notNull(),
		workLocation: text('work_location').notNull(),
		schedule: text('schedule').notNull(),
		startDate: timestamp('start_date').notNull(),
		companyInformation: text('company_information').notNull(),
		performanceAnalysis: text('performance_analysis').notNull(),
		jobSummary: text('job_summary').notNull(),
		responsibilities: text('responsibilities').notNull(),
		qualifications: text('qualifications').notNull(),
		createdAt: timestamp('created_at').defaultNow().notNull(),
	},
	(jobDescriptions) => {
		return {
			uniqueIdx: uniqueIndex('unique_idx').on(jobDescriptions.title),
		};
	},
);
