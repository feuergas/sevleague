import Link from "next/link";

const Footer = () => {
	return (
		<footer className='bg-glass-opaque z-20 mt-auto w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6'>
			<span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
				© 2023{" "}
				<Link
					href='#'
					className='hover:underline'
				>
					SevLeague™
				</Link>
				. All Rights Reserved.
			</span>
			<ul className='mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
				<li>
					<Link
						href='#'
						className='mr-4 hover:underline md:mr-6 '
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href='#'
						className='mr-4 hover:underline md:mr-6'
					>
						Privacy Policy
					</Link>
				</li>
				<li>
					<Link
						href='#'
						className='mr-4 hover:underline md:mr-6'
					>
						Licensing
					</Link>
				</li>
				<li>
					<Link
						href='#'
						className='hover:underline'
					>
						Contact
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
