import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	BsSunFill,
	BsMoonStarsFill,
	BsCircleHalf,
	BsDisplayFill,
} from "react-icons/bs";

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

	return (
		<div className='inline-flex rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
			<Dropdown
				arrowIcon={false}
				inline={true}
				label={themes.map((radioTheme, idx) =>
					theme === radioTheme.value ? (
						<div
							className='inline-flex h-6 w-6 items-center justify-center'
							key={idx}
						>
							{radioTheme.icon}
						</div>
					) : null
				)}
			>
				{themes.map((radioTheme) => (
					<Dropdown.Item
						key={radioTheme.name}
						onClick={() => setTheme(radioTheme.value)}
					>
						{radioTheme.icon}
						<span className='ml-2 font-medium'>
							{radioTheme.name}
						</span>
					</Dropdown.Item>
				))}
			</Dropdown>
		</div>
	);
};

export default ThemeSwitch;
