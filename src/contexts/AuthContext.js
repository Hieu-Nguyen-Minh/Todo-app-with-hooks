import React, { createContext, useEffect, useReducer, useState } from 'react';
import { authReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    // const [isAuthenticated, setAuthentication] = useState(true)
    // const toggleAuth = () => {
    //     setAuthentication(!isAuthenticated)
    // }
    const [isAuthenticated, dispatch] = useReducer(authReducer, false)
    //useEffect
    useEffect(() => {
        alert(isAuthenticated ? 'Login Successful' : 'You are logged out');
    }, [isAuthenticated])

    const authContextData = {
        isAuthenticated,
        dispatch
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;