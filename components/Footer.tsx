import Link from "next/link";
import { BsDiscord, BsGithub, BsReddit, BsTelegram } from "react-icons/bs";

const Footer = () => {
	const socials = [
		{
			name: "Telegram channel",
			href: "#",
			icon: <BsTelegram className='h-5 w-5' />,
			color: "text-telegram",
		},
		{
			name: "Discord Server",
			href: "#",
			icon: <BsDiscord className='h-5 w-5' />,
			color: "text-discord",
		},
		{
			name: "GitHub Repo",
			href: "#",
			icon: <BsGithub className='h-5 w-5' />,
			color: "text-github",
		},
		{
			name: "Subreddit",
			href: "#",
			icon: <BsReddit className='h-5 w-5' />,
			color: "text-reddit",
		},
	];

	return (
		<footer className='bg-glass-opaque z-20 mt-auto flex w-full flex-col items-center p-4 md:flex-row md:justify-between md:p-6'>
			<span className='order-2 my-3 text-sm text-gray-500 dark:text-gray-400 sm:text-center md:order-1 md:m-0'>
				Copyright © 2023{" "}
				<a
					href='#'
					className='hover:text-primary-500 dark:hover:text-white'
				>
					Treapaloski
				</a>
			</span>
			<ul className='order-1 my-3 flex flex-wrap items-center space-x-2 text-sm dark:text-gray-400 md:order-2 md:m-0'>
				{socials.map((social, idx) => (
					<li
						key={idx}
						className='bg-gradient-to-tr from-blue-500 to-teal-500 bg-clip-text text-transparent'
					>
						<a
							href={social.href}
							className={`navbar-button ${social.color}`}
						>
							{social.icon}
							<span className='sr-only'>{social.name}</span>
						</a>
					</li>
				))}
			</ul>
		</footer>
	);
};

export default Footer;
