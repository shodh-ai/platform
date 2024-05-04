import type { ReactNode } from 'react';

const AppShell = ({ children, navbar, header }: { children: ReactNode; navbar?: ReactNode; header?: ReactNode }) => {
	return (
		<div>
			<div className="fixed left-0 top-0 flex h-screen w-64 items-stretch p-3">
				<div className="flex w-full rounded-xl bg-sugarMint">{navbar}</div>
			</div>

			<div className="ml-64 flex flex-col p-3 pl-0">
				<div className="flex h-16 w-full items-center rounded-xl bg-astronaut px-9 py-2">{header}</div>
				<div className="mt-9">{children}</div>
			</div>
		</div>
	);
};

export default AppShell;
