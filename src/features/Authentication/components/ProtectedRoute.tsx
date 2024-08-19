import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

type ProtectedRouteProps = {
	children: any;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { user } = useAuth();
	const navigate = useNavigate();
	const { pathname, search } = useLocation();

	useEffect(() => {
		if (!user) {
			navigate(
				{
					pathname: "/user-login",
					search: `?callback=${pathname + search}`,
				},
				{ replace: true }
			);
		}
	}, [user, navigate, pathname, search]);

	return children;
}
