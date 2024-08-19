import SidebarNavigationButton from "../SidebarNavigationButton";
import {
	ArrowRightFromLine,
	Grid2x2Check,
	ArrowLeftToLine,
	Pen,
} from "lucide-react";
import { Separator } from "../../../../components/ui/separator";
import ThemeToggle from "../../../../components/ThemeToggle";

type SidebarProps = {
	expanded: boolean;
	onCloseClick: () => void;
};

function Sidebar({ expanded, onCloseClick }: SidebarProps) {
	return (
		<div
			className="flex flex-col overflow-clip duration-300 transition-all card ml-2 my-2"
			style={{ width: expanded ? "250px" : "64px" }}
		>
			<div className="flex items-center py-2 relative w-full px-4 justify-between mb-8">
				<h1
					className={
						"text-xl transition-all duration-300 whitespace-nowrap " +
						(expanded ? "opacity-100 w-fit" : "opacity-0 w-0 -z-10")
					}
				>
					Admin panel
				</h1>
				<button
					className="rounded-full w-10 h-10 grid items-center justify-center opacity-50 hover:opacity-100"
					onClick={() => onCloseClick()}
				>
					{expanded ? <ArrowLeftToLine /> : <ArrowRightFromLine />}
				</button>
			</div>
			<nav>
				<ul className="flex flex-col px-2 gap-6">
					<section className="flex justify-stretch flex-col gap-1">
						<SidebarNavHeader
							label={"Movies"}
							expanded={expanded}
						/>
						<SidebarNavigationButton
							expanded={expanded}
							key={"movies table"}
							label={"Manage"}
							icon={<Grid2x2Check size={24} />}
							path={"movies"}
						/>
						<SidebarNavigationButton
							expanded={expanded}
							key={"add new movie"}
							label={"Add new Movie"}
							icon={<Pen scale={24} />}
							path={"add-movie"}
						/>
					</section>
					<Separator />
					<section className="flex flex-col gap-1">
						<SidebarNavHeader
							label={"Movies"}
							expanded={expanded}
						/>
						<SidebarNavigationButton
							expanded={expanded}
							key={"movies table"}
							label={"Manage"}
							icon={""}
							path={"movies"}
						/>
						<SidebarNavigationButton
							expanded={expanded}
							key={"add new movie"}
							label={"Add new Movie"}
							icon={""}
							path={"add-movie"}
						/>
					</section>
				</ul>
			</nav>
			<div className="mt-auto mb-2 ml-2">
				<ThemeToggle />
			</div>
		</div>
	);
}

export default Sidebar;

function SidebarNavHeader({
	label,
	expanded,
}: {
	label: string;
	expanded: boolean;
}) {
	return (
		<h2
			className={`text-sm mb-2 text-slate-400 transition-opacity duration-300 ${
				expanded ? "opacity-100" : "opacity-0"
			}`}
		>
			{label}
		</h2>
	);
}
