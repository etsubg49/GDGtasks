import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserAuthProvider } from './UserAuthContext';
import App from './App';

ReactDOM.render(
    <UserAuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserAuthProvider>,
    document.getElementById('root')
);
