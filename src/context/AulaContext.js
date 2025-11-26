import React, { createContext, useContext, useState } from "react";

const AulaContext = createContext();

export function AulaProvider({ children }) {
    const [aula, setAula] = useState(null)

    return (
        <AulaContext.Provider value={{ aula, setAula }}>
            {children}
        </AulaContext.Provider>
    )
}

export function useAula() {
    return useContext(AulaContext)
}