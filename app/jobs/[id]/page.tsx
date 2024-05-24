import { Form } from 'components';
import { getJobData as getData } from 'drizzle/db';

type Question = {
	id: number;
	aspect: string;
	question: string;
	description: string;
};

const getJobData = async (id: number) => {
	const result = await getData(id);

	if (!result) return null;

	try {
		const response = await fetch('https://shodh-api.vercel.app/shodhjd/', {
			mode: 'cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(result),
		});

		const { questions } = (await response.json()) as unknown as { questions: Question[] };

		const technicalSkillsQuestions = questions.filter(
			(question: Question) => question.aspect === 'Technical Skills',
		);
		const softSkillsQuestions = questions.filter((question: Question) => question.aspect === 'Soft Skills');
		const experienceQuestions = questions.filter((question: Question) => question.aspect === 'Experience');
		const analyticalSkillsQuestions = questions.filter(
			(question: Question) => question.aspect === 'Analytical Skills',
		);

		return { technicalSkillsQuestions, softSkillsQuestions, experienceQuestions, analyticalSkillsQuestions };
	} catch (err) {
		console.error(err);
		return null;
	}
};

export default async function Page({ params: { id } }: { params: { id: number } }) {
	const data = await getJobData(id);

	if (data)
		return (
			<div className="px-3">
				<h1 className="mb-7 text-2xl font-bold text-astronaut">Suggested Interview Questions</h1>

				<div className="flex w-full gap-6">
					<Form>
						<div className="grid w-full gap-6 rounded-xl bg-whippedCream p-9">
							{data.technicalSkillsQuestions && (
								<Form.Item className="flex flex-col gap-[14px]">
									<h2 className="text-base font-medium text-astronaut">Technical Skills</h2>

									{data.technicalSkillsQuestions.map((item, i) => (
										<Form.CheckBox key={i}>{item.question}</Form.CheckBox>
									))}
								</Form.Item>
							)}
							{data.analyticalSkillsQuestions && (
								<Form.Item className="flex flex-col gap-[14px]">
									<h2 className="text-base font-medium text-astronaut">Analytical Skills</h2>

									{data.analyticalSkillsQuestions.map((item, i) => (
										<Form.CheckBox key={i}>{item.question}</Form.CheckBox>
									))}
								</Form.Item>
							)}
							{data.softSkillsQuestions && (
								<Form.Item className="flex flex-col gap-[14px]">
									<h2 className="text-base font-medium text-astronaut">Soft Skills</h2>

									{data.softSkillsQuestions.map((item, i) => (
										<Form.CheckBox key={i}>{item.question}</Form.CheckBox>
									))}
								</Form.Item>
							)}
							{data.experienceQuestions && (
								<Form.Item className="flex flex-col gap-[14px]">
									<h2 className="text-base font-medium text-astronaut">Exeprience</h2>

									{data.experienceQuestions.map((item, i) => (
										<Form.CheckBox key={i}>{item.question}</Form.CheckBox>
									))}
								</Form.Item>
							)}
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
		);

	return <div className="px-3">Error Loading Job Data</div>;
}
