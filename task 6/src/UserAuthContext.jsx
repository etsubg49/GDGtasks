import React, { createContext, useState } from 'react';

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleAuth = () => {
        setIsAuthenticated((prevAuthStatus) => !prevAuthStatus);
    };

    return (
        <UserAuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
            {children}
        </UserAuthContext.Provider>
    );
};

export default UserAuthContext;


