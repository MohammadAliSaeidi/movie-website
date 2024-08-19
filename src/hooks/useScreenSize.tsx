import { useMediaQuery } from "react-responsive";

const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536,
};

export function useScreenSize(size: keyof typeof breakpoints) {
	return useMediaQuery({ minWidth: breakpoints[size] });
}
