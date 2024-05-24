import { Form } from 'components';
import { getJobData as getData } from 'drizzle/db';
import { cache } from 'react';

const data = {
	technincalSkills: [
		'Describe your experience with building and deploying machine learning models in production environments for the projects and difficulties faced during completion?',
		'Explain the concept of overfitting and how you would mitigate it in a ML project?',
	],
	experience: [
		'Tell us about a time you encountered a challenge while working on a machine learning project. How did you approach the problem and what was the outcome?',
		' Have you ever collaborated with data scientists on a project? Describe your role and how you ensured effective communication.',
	],
	softSkills: [
		'Tell us about a time you encountered a challenge while working on a machine learning project. How did you approach the problem and what was the outcome?',
		'Have you ever collaborated with data scientists on a project? Describe your role and how you ensured effective communication.',
	],
};

const getJobData = cache(async (id: number) => {
	const result = await getData(id);

	if (result) return result;
	return null;
});

export default async function Page({ params: { id } }: { params: { id: number } }) {
	const data = await getJobData(id);

	return (
		data && (
			<div className="px-3">
				<h1 className="mb-7 text-2xl font-bold text-astronaut">Suggested Interview Questions</h1>

				<div className="flex w-full gap-6">
					<Form>
						<div className="grid w-full gap-6 rounded-xl bg-whippedCream p-9">
							<Form.Item className="flex flex-col gap-[14px]">
								<h2 className="text-base font-medium text-astronaut">Technical Skills</h2>

								{/* {data.technincalSkills.map((item, i) => (
									<Form.CheckBox key={i}>{item}</Form.CheckBox>
								))} */}
							</Form.Item>

							<Form.Item className="flex flex-col gap-[14px]">
								<h2 className="text-base font-medium text-astronaut">Experience</h2>

								{/* {data.experience.map((item, i) => (
									<Form.CheckBox key={i}>{item}</Form.CheckBox>
								))} */}
							</Form.Item>

							<Form.Item className="flex flex-col gap-[14px]">
								<h2 className="text-base font-medium text-astronaut">Soft Skills</h2>

								{/* {data.softSkills.map((item, i) => (
									<Form.CheckBox key={i}>{item}</Form.CheckBox>
								))} */}
							</Form.Item>
						</div>

						<Form.Item className="flex justify-center">
							<Form.SubmitButton className="mx-auto w-1/2">Submit</Form.SubmitButton>
						</Form.Item>
					</Form>

					<div className="flex h-full w-1/3 flex-col gap-3 rounded-xl bg-whippedCream px-6 py-9">
						<div className="flex gap-[14px]">
							<h2 className="text-base font-medium text-astronaut">Suggest Questions</h2>
						</div>
					</div>
				</div>
			</div>
		)
	);

	return <>Error Loading Job Data</>;
}
