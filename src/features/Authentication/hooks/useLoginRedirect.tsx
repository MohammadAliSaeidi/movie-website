import { useNavigate, useSearchParams } from "react-router-dom";

export default function useRedirectCallback() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const getRedirectUrl = () => {
		const redirectUrl = searchParams.get("callback");
		return redirectUrl || ""; // Ensure a non-nullish value
	};

	const redirect = ({
		externalUrl,
		defaultUrl,
	}: {
		externalUrl: string;
		defaultUrl: string;
	}) => {
		const targetUrl = getRedirectUrl() || defaultUrl;

		if (targetUrl) {
			if (externalUrl) {
				try {
					window.open(targetUrl, "_self", "noopener noreferrer");
				} catch (error) {
					console.error("Error opening external URL:", error);
					// Handle potential errors gracefully, e.g., display a fallback message
				}
			} else {
				navigate(targetUrl);
			}
		}
	};

	return redirect;
}
