import { useEffect } from "react";
import usePersistedState from "../../hooks/usePersistedState";
import { BsSunFill, BsMoonStarsFill, BsCircleHalf } from "react-icons/bs";
import { NavDropdown } from "react-bootstrap";

const ThemeSwitch = (props) => {

    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [theme, setTheme] = usePersistedState('theme', defaultTheme);

    useEffect(() => {
        document.body.setAttribute('data-bs-theme', '');
    }, []);

    useEffect(() => {
        const items = document.querySelectorAll('[data-bs-theme]:not([data-bs-theme-static])');
        items.forEach((item) => (
            item.setAttribute('data-bs-theme', theme === 'auto' ? defaultTheme : theme)
        ));
    }, [theme, defaultTheme]);

    const radioThemes = [
        { value: 'light', label: 'Light', icon: <BsSunFill className="me-2" /> },
        { value: 'dark', label: 'Dark', icon: <BsMoonStarsFill className="me-2" /> },
        { value: 'auto', label: 'Auto', icon: <BsCircleHalf className="me-2" /> }
    ];

    return (
        <NavDropdown
            title={
                radioThemes.map((radioTheme) => (
                    theme === radioTheme.value ? (
                        radioTheme.icon
                    ) : (
                        null
                    )
                ))
            }
            align={{ md: 'end' }}
            data-bs-theme
        >

            {
                radioThemes.map((radioTheme, idx) => (
                    <NavDropdown.Item
                        key={idx}
                        onClick={() => setTheme(radioTheme.value)}
                        active={theme === radioTheme.value}
                    >
                        {radioTheme.icon}
                        {radioTheme.label}
                    </NavDropdown.Item>
                ))
            }
        </NavDropdown>
    );
}

export default ThemeSwitch;