import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";

export type ITheme = "dark" | "light";
export type IThemeContext = {
	theme: ITheme;
	setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
};

const DEFAULT_THEME: ITheme = "dark";
const DEFAULT_THEME_CONTEXT_VALUE: IThemeContext = {
	setTheme: () => {},
	theme: "dark",
};

const ThemeContext = createContext<IThemeContext>(DEFAULT_THEME_CONTEXT_VALUE);

const ThemeProvider = ({ children }: PropsWithChildren) => {
	const [theme, setTheme] = useState<ITheme>(DEFAULT_THEME);

	useEffect(() => {
		const root = window.document.documentElement;
		console.log(theme);
		switch (theme) {
			case "dark":
				root.classList.add("dark");
				break;
			case "light":
				root.classList.remove("dark");
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ setTheme: setTheme, theme: theme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useThemeContext = () => {
	const themeContextValue: IThemeContext = useContext(ThemeContext);

	return themeContextValue;
};

export { useThemeContext, ThemeProvider };
