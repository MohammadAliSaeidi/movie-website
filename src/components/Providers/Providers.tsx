import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<SkeletonTheme>{children}</SkeletonTheme>
		</QueryClientProvider>
	);
}
