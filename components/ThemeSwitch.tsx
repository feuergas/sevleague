import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsSunFill, BsMoonStarsFill, BsCircleHalf } from "react-icons/bs";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

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
			icon: <BsSunFill className='mr-2' />,
			// icon: <FontAwesomeIcon icon='sun' />,
		},
		{
			name: "Dark",
			value: "dark",
			icon: <BsMoonStarsFill className='mr-2' />,
			// icon: <FontAwesomeIcon icon='moon' />,
		},
		{
			name: "System",
			value: "system",
			icon: <BsCircleHalf className='mr-2' />,
			// icon: <FontAwesomeIcon icon='circle-half-stroke' />,
		},
	];

	return (
		<div className='flex md:order-2'>
			<Dropdown
				arrowIcon={true}
				inline={true}
				label={themes.map((radioTheme) =>
					theme === radioTheme.value ? radioTheme.icon : null
				)}
			>
				{themes.map((radioTheme) => (
					<Dropdown.Item
						key={radioTheme.name}
						onClick={() => setTheme(radioTheme.value)}
					>
						{radioTheme.icon}
						<span className='ml-1'>{radioTheme.name}</span>
					</Dropdown.Item>
				))}
			</Dropdown>
		</div>
	);
};

export default ThemeSwitch;
