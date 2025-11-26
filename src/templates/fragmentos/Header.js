import React, { useEffect, useState } from "react"
import { useHeader } from "../../context/HeaderContext"
import { useUser } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ setSelecionarShow, setCriarAulaShow, setEditarAulaShow }) {
    const { headerType, desativaAula } = useHeader();
    const { user } = useUser();
    const navigate = useNavigate();

    const fecharAula = (e) => {
        e.preventDefault()

        desativaAula()
        navigate("/")
    }

    return (
        <header id="Header">
            {(headerType == 'padrao') ? 
            <>
            <nav className="Explorar">
                {(window.location.pathname == '/perfil' || window.location.pathname.startsWith('/aula')) ? 
                    <Link to="/">
                        <button className="btn voltar">Voltar</button>
                    </Link>
                    :
                    <div className="busca">
                        <input type="text" placeholder="Explorar" />
                        <p className="lupa-explorar">&#x1F50E;&#xFE0E;</p>
                    </div>
                }
                <button className="btn abrir" onClick={() => {
                    setSelecionarShow((prev) => !prev)
                    setCriarAulaShow(false)
                }}>Abrir aula</button>
                <button className="btn criar" onClick={() => {
                    setCriarAulaShow((prev) => !prev)
                    setSelecionarShow(false)
                }}>Criar aula</button>
                <Link to="/perfil">
                    <div className="usuario">
                        <button className="btn perfil">Perfil</button>
                        <label>{user.nome}</label>
                    </div>
                </Link>
            </nav>
            
            </> 

            :

            <>
            <nav className="Explorar">
                <button className="btn fechar" onClick={(e) => {fecharAula(e)}}>Fechar aula</button>
                <button className="btn editar" onClick={() => {setEditarAulaShow(prev => !prev)}}>Editar aula</button>
                <button className="btn trocar" onClick={() => {setSelecionarShow(prev => !prev)}}>Trocar aula</button>
            </nav>
            </>
            }
        </header>
    )
}