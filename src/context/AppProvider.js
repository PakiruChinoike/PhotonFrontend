import React from "react";
import { UserProvider } from "./UserContext";
import { HeaderProvider } from "./HeaderContext";
import { ConfirmacaoProvider } from "./ConfirmacaoContext";
import { AulaProvider } from "./AulaContext";

export function AppProvider({ children }) {
    return(
        <UserProvider>
            <AulaProvider>
                <ConfirmacaoProvider>
                    <HeaderProvider>
                        {children}
                    </HeaderProvider>
                </ConfirmacaoProvider>
            </AulaProvider>
        </UserProvider>
    )
}