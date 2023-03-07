import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import usePersistedState from "../../hooks/usePersistedState";
import { BsSunFill, BsMoonStarsFill, BsCircleHalf } from "react-icons/bs";

const ThemeSwitch = () => {

    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [theme, setTheme] = usePersistedState('theme', defaultTheme);

    useEffect(() => {
        document.body.setAttribute('data-bs-theme', theme === 'auto' ? defaultTheme : theme);
    }, [theme, defaultTheme]);

    const radioThemes = [
        { value: 'light', label: 'Light', icon: <BsSunFill className="me-2" /> },
        { value: 'dark', label: 'Dark', icon: <BsMoonStarsFill className="me-2" /> },
        { value: 'auto', label: 'Auto', icon: <BsCircleHalf className="me-2" /> }
    ];

    return (
        <Dropdown>
            {
                radioThemes.map((radioTheme) => (
                    theme === radioTheme.value ? (
                        <Dropdown.Toggle>
                            {radioTheme.icon}
                        </Dropdown.Toggle>
                    ) : (
                        null
                    )
                ))
            }
            <Dropdown.Menu>
                {
                    radioThemes.map((radioTheme, idx) => (
                        <Dropdown.Item
                            key={idx}
                            onClick={() => setTheme(radioTheme.value)}
                            active={theme === radioTheme.value}
                        >
                            {radioTheme.icon}
                            {radioTheme.label}
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ThemeSwitch;