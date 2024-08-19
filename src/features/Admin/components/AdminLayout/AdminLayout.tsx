import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { Drawer } from "vaul";
import { useEffect, useState } from "react";
import { useScreenSize } from "../../../../hooks/useScreenSize";

export default function AdminLayout() {
	const minScreenLaptop = useScreenSize("lg");
	const [navbarExpanded, setNavbarExpanded] = useState<boolean>(false);

	useEffect(() => {
		setNavbarExpanded(minScreenLaptop);
	}, [minScreenLaptop]);

	const handleOnNavbarExpandClick = () => {
		setNavbarExpanded((expanded) => !expanded);
	};

	return (
		<div className="flex flex-row h-screen">
			{minScreenLaptop ? (
				<Sidebar
					expanded={navbarExpanded}
					onCloseClick={handleOnNavbarExpandClick}
				/>
			) : (
				<Drawer.Root
					direction="left"
					open={navbarExpanded}
					onOpenChange={setNavbarExpanded}
				>
					<Drawer.Portal>
						<Drawer.Overlay
							onClick={() => handleOnNavbarExpandClick()}
							className="fixed inset-0 bg-black/40"
						/>
						<Drawer.Content className="flex flex-col h-full w-fit mt-24 fixed bottom-0 right-0">
							<Sidebar
								expanded={true}
								onCloseClick={handleOnNavbarExpandClick}
							/>
						</Drawer.Content>
					</Drawer.Portal>
				</Drawer.Root>
			)}
			<div className="flex flex-col flex-grow">
				{/* <Header
					onNavbarExpandClick={() => handleOnNavbarExpandClick()}
				/> */}
				<main className="overflow-y-scroll block flex-grow px-3 py-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
