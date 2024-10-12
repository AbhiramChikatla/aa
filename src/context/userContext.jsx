import { createContext, useEffect, useState } from "react";
import React from "react";
export const userContext = createContext();

export function UserContextProvider({ children }) {
    const [LoginUser, setLoginUser] = useState(null);


    const fetchUser = async () => {
        const data = await fetch("http://localhost:3000/profile");
        const user = await data.json();
        console.log("hello");
        console.log("the final user is", user);
        setLoginUser(user);
    }


    useEffect(() => {
        if (!LoginUser) {
           
            fetchUser();
            
        }
    }, [LoginUser]);

    return (
        <userContext.Provider value={{ LoginUser, setLoginUser }}>
            <div>{children}</div>
        </userContext.Provider>
    );
}
