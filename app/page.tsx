import { Form } from 'components';
import { addNewJob } from 'drizzle/db';
import { redirect } from 'next/navigation';

export default function Page() {
	const submitAction = async (formData: FormData) => {
		'use server';

		// TODO: Handle for undefined values.
		const rawFormData = {
			title: formData.get('title')!.toString(),
			workLocation: formData.get('workLocation')!.toString(),
			schedule: formData.get('schedule')!.toString(),
			companyInformation: formData.get('companyInformation')!.toString(),
			performanceAnalysis: formData.get('performanceAnalysis')!.toString(),
			jobSummary: formData.get('jobSummary')!.toString(),
			responsibilities: formData.get('responsibilities')!.toString(),
			qualifications: formData.get('qualifications')!.toString(),
			startDate: new Date(), // TODO: Get this from form
		};

		// TODO: Error Handling
		const result = await addNewJob(rawFormData);

		redirect(`/job/${result[0].id}`);
	};

	return (
		<div className="px-3">
			<h1 className="mb-7 text-2xl font-bold text-astronaut">Job Description Details</h1>

			<div className="flex w-full gap-6">
				<Form action={submitAction}>
					<div className="grid w-full grid-cols-2 gap-6 rounded-xl bg-whippedCream p-9">
						<Form.Item>
							<Form.Label>Job Title</Form.Label>
							<Form.TextInput name="title" />
						</Form.Item>

						<Form.Item>
							<Form.Label>Work Location</Form.Label>
							<Form.TextInput name="workLocation" />
						</Form.Item>

						<Form.Item>
							<Form.Label>Schedule</Form.Label>
							<Form.TextInput name="schedule" />
						</Form.Item>

						<Form.Item>
							<Form.Label>Start Date</Form.Label>
							<Form.TextInput name="startDate" />
						</Form.Item>

						<Form.Item className="col-span-2">
							<Form.Label>Company Information</Form.Label>
							<Form.TextInput name="companyInformation" />
						</Form.Item>

						<Form.Item className="col-span-2">
							<Form.Label>Performance Analysis</Form.Label>
							<Form.TextInput name="performanceAnalysis" />
						</Form.Item>

						<Form.Item className="col-span-2">
							<Form.Label>Job Summary</Form.Label>
							<Form.TextInput name="jobSummary" />
						</Form.Item>

						<Form.Item className="col-span-2">
							<Form.Label>Responsibilities</Form.Label>
							<Form.TextInput name="responsibilities" />
						</Form.Item>

						<Form.Item className="col-span-2">
							<Form.Label>Qualifications</Form.Label>
							<Form.TextInput name="qualifications" />
						</Form.Item>
					</div>

					<Form.Item className="flex justify-center">
						<Form.SubmitButton className="mx-auto w-1/2">Next</Form.SubmitButton>
					</Form.Item>
				</Form>

				<div className="flex h-full w-1/3 flex-col gap-3 rounded-xl bg-whippedCream px-6 py-9">
					<div className="flex gap-[14px]">
						<h2 className="text-base font-medium text-astronaut">Upload Job Description</h2>
					</div>

					<button className="w-full rounded-full border border-astronaut px-9 py-[15px]">
						<span className="text-base font-semibold text-astronaut">Upload</span>
					</button>
				</div>
			</div>
		</div>
	);
}
