import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import ThemeSwitch from "./ThemeSwitch";

const classNames = (...classes: any[]) => {
	return classes.filter(Boolean).join(" ");
};

const MyNavBar = () => {
	const router = useRouter();

	const pages = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Ranking", href: "/ranking" },
		{ name: "Archive", href: "/archive" },
	];

	const [hiddenMenu, setHiddenMenu] = useState<boolean>(true);

	return (
		<nav className='bg-glass sticky top-0 z-40 mb-4 w-full flex-none px-2 py-2.5 shadow dark:shadow-lg sm:px-4 lg:z-50'>
			<div className='mx-auto flex flex-wrap items-center justify-between'>
				<a
					className='flex items-center'
					href='/'
				>
					<Image
						src='/logo.svg'
						className='mr-3 h-6 w-6 sm:h-9 sm:w-9'
						width={40}
						height={40}
						alt='SevLeague Logo'
					/>
					<span className='self-center whitespace-nowrap font-sans text-xl font-semibold'>
						SevLeague
					</span>
				</a>
				<div className='flex md:order-2'>
					<ThemeSwitch />
					<button
						className='inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-600/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-400/10  dark:focus:ring-gray-700 md:hidden'
						onClick={() => setHiddenMenu(hiddenMenu ? false : true)}
					>
						<span className='sr-only'>Open main menu</span>

						<BsList
							className='h-6 w-6 shrink-0'
							stroke='currentColor'
							fill='currentColor'
							strokeWidth='1'
						/>
					</button>
				</div>
				<div
					className={classNames(
						"w-full transition-all ease-in-out md:block md:w-auto",
						hiddenMenu ? "hidden" : ""
					)}
				>
					<ul className='mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium'>
						{pages.map((item, idx) => (
							<li key={idx}>
								<a
									href={item.href}
									className={classNames(
										item.href == router.asPath
											? "text-primary-600 dark:text-white md:bg-transparent"
											: "dark:text-gray-400 dark:hover:text-white",
										true
											? "border-b border-black/10 dark:border-white/10 md:border-0 "
											: "",
										"block px-4 py-2 font-semibold hover:bg-gray-600/10 dark:hover:bg-gray-400/10 md:p-0 md:hover:bg-transparent md:hover:text-primary-600 md:dark:hover:bg-transparent md:dark:hover:text-white"
									)}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default MyNavBar;
