import { Form } from 'components';

export default function Page() {
	return (
		<div className="px-3">
			<h1 className="mb-7 text-2xl font-bold text-astronaut">Job Description Details</h1>

			<div className="flex w-full gap-6">
				<Form>
					<div className="grid w-full grid-cols-2 gap-6 rounded-xl bg-whippedCream p-9">
						<Form.Item>
							<Form.Label>Job Title</Form.Label>
							<Form.TextInput />
						</Form.Item>

						<Form.Item>
							<Form.Label>Work Location</Form.Label>
							<Form.TextInput />
						</Form.Item>

						<Form.Item>
							<Form.Label>Schedule</Form.Label>
							<Form.TextInput />
						</Form.Item>

						<Form.Item>
							<Form.Label>Start Date</Form.Label>
							<Form.TextInput />
						</Form.Item>

						<Form.Item className="col-span-2">
							<Form.Label>Company Information</Form.Label>
							<Form.TextInput />
						</Form.Item>

						<Form.Item className="col-span-2">
							<Form.Label>Performance Analysis</Form.Label>
							<Form.TextInput />
						</Form.Item>

						<Form.Item className="col-span-2">
							<Form.Label>Job Summary</Form.Label>
							<Form.TextInput />
						</Form.Item>

						<Form.Item className="col-span-2">
							<Form.Label>Responsibilities</Form.Label>
							<Form.TextInput />
						</Form.Item>

						<Form.Item className="col-span-2">
							<Form.Label>Qualifications</Form.Label>
							<Form.TextInput />
						</Form.Item>
					</div>

					<Form.Item className="flex justify-center">
						<Form.SubmitButton className="mx-auto w-1/2">Submit</Form.SubmitButton>
					</Form.Item>
				</Form>

				<div className="flex w-1/3 flex-col justify-start gap-3 rounded-xl bg-whippedCream px-6 py-9">
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
