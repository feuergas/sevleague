import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";
import ThemeSwitch from "./ThemeSwitch";

const MyNavBar = () => {
	const router = useRouter();

	const pages = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Services", href: "/services" },
	];

	return (
		<Navbar
			fluid={true}
			className='sticky top-0 left-0 z-20 mb-4 w-full border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800'
		>
			<Navbar.Brand href='/'>
				<img
					src='/logo.svg'
					className='mr-3 h-6 sm:h-9'
					alt='SevLeague Logo'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					SevLeague
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				{pages.map((item) => (
					<Navbar.Link
						key={item.name}
						href={item.href}
						active={item.href == router.asPath}
					>
						{item.name}
					</Navbar.Link>
				))}
			</Navbar.Collapse>
			<ThemeSwitch />
		</Navbar>
	);
};

export default MyNavBar;
