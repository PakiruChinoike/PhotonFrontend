import React, { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export function HeaderProvider({ children }) {
    const [headerType, setHeaderType] = useState("padrao")

    const ativaAula = () => setHeaderType("aula")
    const desativaAula = () => setHeaderType("padrao")

    return (
        <HeaderContext.Provider value={{ headerType, ativaAula, desativaAula }}>
            {children}
        </HeaderContext.Provider>
    )
}

export function useHeader() {
    return useContext(HeaderContext)
}