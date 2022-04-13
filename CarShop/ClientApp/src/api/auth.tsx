import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext({
    isAdmin: false,
    setIsAdmin: (value: boolean) => { },
});

type Props = {
    children?: React.ReactNode;
};

export const AuthContextProvider: React.FC<Props> = (props) => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const checkAdmin = async () => {
            const response = await fetch("api/auth/is-authenticated");
            const jsonData = (await response.json()) as boolean;
            console.log(jsonData);
            setIsAdmin(jsonData);
        };

        checkAdmin();
    }, []);

    return (
        <AuthContext.Provider value={{ isAdmin: isAdmin, setIsAdmin: setIsAdmin }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useIsAdmin = () => useContext(AuthContext);
