import { PropsWithChildren } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

export default function Providers({ children }: PropsWithChildren) {
	return <SkeletonTheme>{children}</SkeletonTheme>;
}
