import React from "react"

export default function Header() {

    return (
        <header id="Header">
            <nav class="Explorar">
                <input type="text" placeholder="Explorar" />
            </nav>
            <button>Abrir aula</button>
            <button>Criar aula</button>
            <button>Perfil</button>
            <label>Nome do usuario</label>
        </header>
    )
}