import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function Header() {
	const [hasScrolled, setHasScrolled] = useState(false);
	const { scrollY } = useScroll();
	const scrollThreshold = 50;

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > scrollThreshold) {
			setHasScrolled(true);
		} else {
			setHasScrolled(false);
		}
	});

	return (
		<header
			className={
				"animate fixed z-50 flex max-w-full bg-slate-900/50 border-slate-700 items-center justify-between px-4 !duration-500 inset-x-0 top-2 mx-auto " +
				(hasScrolled
					? "h-16 w-11/12 rounded-full border backdrop-blur-sm backdrop-brightness-150 md:top-4 md:max-w-3xl lg:max-w-5xl lg:px-4 xl:max-w-7xl material-dotted"
					: "h-20 w-full border-transparent bg-transparent backdrop-blur-0 backdrop-brightness-100 md:h-24 md:px-10 xl:px-32")
			}
		>
			Test
		</header>
	);
}
