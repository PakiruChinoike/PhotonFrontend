import React from "react"

import Header from "../fragmentos/Header"

export default function Home() {

    return (
        <div className="Home" id="Home">
            <Header />
            <div>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="dd/mm/yyyy"/>
            </div>
            <div>
                <h3>Nome da aula</h3>
            </div>
        </div>
    )
}