import React from "react";
import { UserProvider } from "./UserContext";
import { HeaderProvider } from "./HeaderContext";
import { ConfirmacaoProvider } from "./ConfirmacaoContext";

export function AppProvider({ children }) {
    return(
        <UserProvider>
            <ConfirmacaoProvider>
                <HeaderProvider>
                    {children}
                </HeaderProvider>
            </ConfirmacaoProvider>
        </UserProvider>
    )
}