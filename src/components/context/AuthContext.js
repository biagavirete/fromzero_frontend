import React, { createContext, useCallback, useState } from 'react';

import api from '../../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const authentication = useCallback(({ username, password }) => {
        api
            .post('/session', {username, password})
            .then((response) => {
                console.log('return', response.data);
                setAuth(response.data);
            }
        );
    }, []);

    return (
        <AuthContext.Provider value={{ authentication, auth }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };