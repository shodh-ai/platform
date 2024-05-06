import Image from 'next/image';
import Link from 'next/link';

import { GearSix, Info, Stack } from '@phosphor-icons/react/dist/ssr';

const data = [
	{
		icon: <Stack size={24} weight="duotone" />,
		href: '/dashboard',
		title: 'Dashboard',
	},
	{
		icon: <GearSix size={24} weight="duotone" />,
		href: '/settings',
		title: 'Settings',
	},
	{
		icon: <Info size={24} weight="duotone" />,
		href: '/help',
		title: 'Help',
	},
];

const Navbar = () => {
	return (
		<div className="flex w-full flex-col items-center gap-14 px-2 py-[26px]">
			<Image src="/logo.png" alt="Upgrad Logo" width={137} height={44} />

			{/* TODO: Active state styling */}
			<nav className="flex w-full flex-col">
				{data.map((link, i) => (
					<Link key={i} href={link.href} className="flex gap-2 px-6 py-[14px] font-semibold text-astronaut">
						{link.icon}
						{link.title}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default Navbar;
