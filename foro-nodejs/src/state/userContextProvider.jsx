import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [token, setToken] = useState(null);

    const loginUser = (userData, authToken) => {
        setUser({
            username: userData.username,
            password: userData.password
        });
        setToken(authToken);
    };

    const logoutUser = () => {
        setUser(null);
        setToken(null);
    };
    return (
        <UserContext.Provider value={{ user, token, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
