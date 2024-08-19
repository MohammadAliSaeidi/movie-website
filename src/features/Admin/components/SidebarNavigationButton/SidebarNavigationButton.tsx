import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

type SidebarNavigationButtonProps = {
	label: string;
	icon: ReactNode;
	expanded: boolean;
	path: string;
};

function SidebarNavigationButton({
	label,
	expanded,
	path,
	icon,
}: SidebarNavigationButtonProps) {
	return (
		<li className="flex rounded-md">
			<NavLink
				className={({ isActive }) =>
					"flex-1 " + `${isActive ? "" : ""}`
				}
				to={path}
				end
			>
				<Button
					variant="ghost"
					size={"lg"}
					className={
						"justify-start w-full items-center pl-2.5 " +
						(expanded ? "" : "pr-0.5")
					}
				>
					<div>{icon}</div>
					<p
						className={
							"transition-opacity duration-300 text-base text-left whitespace-nowrap group-hover:text-white " +
							(expanded ? "opacity-100 w-full" : "opacity-0 w-0")
						}
					>
						{label}
					</p>
				</Button>
			</NavLink>
		</li>
	);
}

export default SidebarNavigationButton;
