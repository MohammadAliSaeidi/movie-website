import { useThemeContext } from "../features/Theme/Theme.context";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function ThemeToggle() {
	const { theme, setTheme } = useThemeContext();

	return (
		<Button
			variant={"glass"}
			className="rounded-full w-11 h-11 box-content p-0"
			onClick={() =>
				setTheme((prevTheme) =>
					prevTheme === "dark" ? "light" : "dark"
				)
			}
		>
			{theme === "dark" ? <Sun /> : <Moon />}
		</Button>
	);
}
