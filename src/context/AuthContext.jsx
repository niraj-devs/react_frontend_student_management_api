import { createContext, useState } from "react";
import { authService } from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(
        localStorage.getItem("accessToken")
    );

    const login = async (credentials) => {
        const data = await authService.login(credentials);

        if (!data.accessToken) {
            throw new Error("No access token received from server");
        }

        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        setToken(data.accessToken);

        return data;
    };

    const logout = () => {
        authService.logout();
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                isAuthenticated: !!token,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};