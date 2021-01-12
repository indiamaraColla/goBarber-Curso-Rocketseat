import React, { createContext, useCallback } from 'react';

interface AuthContextData {
    name: string;
    signIn(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvidder: React.FC = ({ children }) => {
    const signIn = useCallback(() => {
        console.log("kmdkmcsmdcs")
    }, []);

    return (
        <AuthContext.Provider value={{ name: 'mara', signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvidder };
