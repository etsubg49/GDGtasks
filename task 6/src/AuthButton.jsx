import React, { useContext } from 'react';
import UserAuthContext from './UserAuthContext';

function AuthButton() {
    const { isAuthenticated, toggleAuth } = useContext(UserAuthContext);

    return (
        <button onClick={toggleAuth}>
            {isAuthenticated ? 'Logout' : 'Login'}
        </button>
    );
}

export default AuthButton;
