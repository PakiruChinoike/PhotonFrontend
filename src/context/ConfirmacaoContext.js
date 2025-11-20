import React, { createContext, useContext, useState } from "react";

const ConfirmacaoContext = createContext();

export function ConfirmacaoProvider({ children }) {
    const [confirmado, setConfirmado] = useState(false)

    const confirmar = () => setConfirmado(true)
    const desconfirmar = () => setConfirmado(false)

    return (
        <ConfirmacaoContext.Provider value={{ confirmado, confirmar, desconfirmar }}>
            {children}
        </ConfirmacaoContext.Provider>
    )
}

export function useConfirmacao() {
    return useContext(ConfirmacaoContext)
}