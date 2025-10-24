import React, { useState } from "react"

import Header from "../fragmentos/Header"
import SelecionarAulaModal from "../fragmentos/SelecionarAulaModal"

export default function Home() {
    const [selecionarShow, setSelecionarShow] = useState(false)

    return (
        <>
        <SelecionarAulaModal show={selecionarShow} setShow={setSelecionarShow} />
        <Header selecionarShow={selecionarShow} setSelecionarShow={setSelecionarShow} />
        <div className="Home" id="Home">
            <div>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="dd/mm/yyyy"/>
            </div>
            <div>
                <h3>Nome da aula</h3>
            </div>
        </div>
        </>
    )
}