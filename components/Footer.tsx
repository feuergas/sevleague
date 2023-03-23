const Footer = () => {
	return (
		<footer className='bg-glass z-20 mt-auto w-full border-t border-gray-200 p-4 shadow dark:border-gray-600 md:flex md:items-center md:justify-between md:p-6'>
			<span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
				© 2023{" "}
				<a
					href='#'
					className='hover:underline'
				>
					SevLeague™
				</a>
				. All Rights Reserved.
			</span>
			<ul className='mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
				<li>
					<a
						href='#'
						className='mr-4 hover:underline md:mr-6 '
					>
						About
					</a>
				</li>
				<li>
					<a
						href='#'
						className='mr-4 hover:underline md:mr-6'
					>
						Privacy Policy
					</a>
				</li>
				<li>
					<a
						href='#'
						className='mr-4 hover:underline md:mr-6'
					>
						Licensing
					</a>
				</li>
				<li>
					<a
						href='#'
						className='hover:underline'
					>
						Contact
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
