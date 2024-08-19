// import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useState } from "react";
// import AuthInfoType from "../../../utils/AuthInfoType";
// import Token from "../../../utils/Token";

// export const AuthContext = createContext<AuthInfoType>({
export const AuthContext = createContext<{
	user: string | null;
	updateUserToken: (newToken: string) => void;
}>({
	user: null,
	updateUserToken: () => {},
});

const isTokenExpired = (user: string) => {
	try {
		// const decodedToken = jwtDecode<Token>(user);
		// const currentTimeInSeconds = Date.now();
		// return decodedToken.exp * 1000 <= currentTimeInSeconds;
		console.log(user);
		return false;
	} catch (err) {
		// if (process.env.NODE_ENV !== "production") {
		// console.error("error while checking token expiration status \n" + err);
		// }
		// return true;
		console.log("token expiration");
		throw err;
	}
};

export default function AuthProvider({ children }: { children: ReactNode }) {
	let defaultToken = null;
	const tokenInLocalStorage = localStorage.getItem("token");
	if (tokenInLocalStorage) {
		const tokenExpired = isTokenExpired(tokenInLocalStorage);
		if (tokenExpired) {
			localStorage.removeItem("token");
		} else {
			defaultToken = tokenInLocalStorage;
		}
	}

	const [user, setUser] = useState(defaultToken);

	const updateUserToken = (newToken: string) => {
		setUser(newToken);
	};

	return (
		<AuthContext.Provider value={{ user, updateUserToken }}>
			{children}
		</AuthContext.Provider>
	);
}
