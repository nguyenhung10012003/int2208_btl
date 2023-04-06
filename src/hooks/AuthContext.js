import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("user") !== null
    );

    const handleLogin = (data) => {
        const user = {email: data.email};
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoggedIn(true);
        console.log("call login");
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{isLoggedIn, handleLogin, handleLogout}}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};