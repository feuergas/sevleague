import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	BsSunFill,
	BsMoonStarsFill,
	BsDisplayFill,
	BsQuestionLg,
	BsCheck2,
} from "react-icons/bs";
import { Listbox, Transition } from "@headlessui/react";
import { IconContext } from "react-icons/lib";

const classNames = (...classes: any[]) => {
	return classes.filter(Boolean).join(" ");
};

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState<boolean>(false);
	const { theme, setTheme } = useTheme();
	const [hidden, sethidden] = useState<boolean>(true);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const themes = [
		{
			name: "Light",
			value: "light",
			icon: <BsSunFill />,
			// icon: <FontAwesomeIcon icon='sun' />,
		},
		{
			name: "Dark",
			value: "dark",
			icon: <BsMoonStarsFill />,
			// icon: <FontAwesomeIcon icon='moon' />,
		},
		{
			name: "System",
			value: "system",
			icon: <BsDisplayFill />,
			// icon: <FontAwesomeIcon icon='circle-half-stroke' />,
		},
	];

	const getThemeIcon = (theme: string | undefined) => {
		for (const radioTheme of themes)
			if (radioTheme.value === theme) return radioTheme.icon;
		return <BsQuestionLg />;
	};

	return (
		<Listbox
			value={theme}
			onChange={setTheme}
		>
			<div className='relative'>
				<Listbox.Button className='navbar-button'>
					<IconContext.Provider value={{ className: "h-6 w-6" }}>
						{getThemeIcon(theme)}
					</IconContext.Provider>
				</Listbox.Button>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<Listbox.Options className='bg-opaque absolute right-0 mt-1 max-h-60 w-auto rounded-md py-2 backdrop-blur focus:outline-none sm:text-sm'>
						{themes.map((radioTheme, idx) => (
							<Listbox.Option
								key={idx}
								className={classNames(
									"flex cursor-pointer select-none flex-row items-center py-2 px-5 align-middle",
									radioTheme.value === theme
										? "text-primary-600 dark:text-white md:bg-transparent"
										: "dark:text-gray-400 dark:hover:text-white",
									"hover:bg-gray-600/10 dark:hover:bg-gray-400/10"
								)}
								value={radioTheme.value}
							>
								{radioTheme.icon}
								<span className='ml-2'>{radioTheme.name}</span>
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};

export default ThemeSwitch;
