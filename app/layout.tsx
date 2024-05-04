import './global.css';

import { AppShell } from 'components';
import { Plus_Jakarta_Sans } from 'next/font/google';

import type { ReactNode } from 'react';
const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-plus-jakarta-sans',
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={plusJakartaSans.variable}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className="bg-unbleached">
				<AppShell>{children}</AppShell>
			</body>
		</html>
	);
}
