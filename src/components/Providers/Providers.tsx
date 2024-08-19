import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "sonner";
import { MessageCircleWarning, CircleX, CheckCircle } from "lucide-react";
import { ThemeProvider } from "../../features/Theme/Theme.context";

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<SkeletonTheme
					baseColor="#7474740"
					highlightColor="rgba(255, 255, 255, 0.05)"
				>
					<Toaster
						expand
						position="bottom-right"
						icons={{
							info: <MessageCircleWarning size={18} />,
							error: <CircleX size={18} />,
							success: <CheckCircle size={18} />,
						}}
						toastOptions={{
							className: "toast",
							classNames: {
								success: "toast-success",
								error: "toast-error",
							},
						}}
					/>
					{children}
				</SkeletonTheme>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
