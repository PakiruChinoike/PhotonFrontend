import React from "react";
import { UserProvider } from "./UserContext";
import { HeaderProvider } from "./HeaderContext";

export function AppProvider({ children }) {
    return(
        <UserProvider>
            <HeaderProvider>
                {children}
            </HeaderProvider>
        </UserProvider>
    )
}