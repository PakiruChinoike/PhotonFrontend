import React, { useEffect, useState } from "react"
import { useHeader } from "../../context/HeaderContext"
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function Header({ setSelecionarShow }) {
    const { headerType } = useHeader();
    const { user, login, logout } = useUser();
    const [usuario, setUsuario] = useState(null)
    const [edicaoShow, setEdicaoShow] = useState(false)
    const [codigo, setCodigo] = useState("178232")
    const [numAlunos, setNumAlunos] = useState(10)

    useEffect(() => {
        login("Roberto")
    }, [])

    return (
        <header id="Header">
            {(headerType == 'padrao') ? 
            <>
            <nav className="Explorar">
                {(window.location.pathname == '/perfil') ? 
                    <Link to="/">
                        <button className="btn voltar">Voltar</button>
                    </Link>
                    :
                    <div className="busca">
                        <input type="text" placeholder="Explorar" />
                        <p className="lupa-explorar">&#x1F50E;&#xFE0E;</p>
                    </div>
                }
                <button className="btn abrir" onClick={() => {setSelecionarShow(true)}}>Abrir aula</button>
                <button className="btn criar">Criar aula</button>
                <Link to="/perfil">
                    <div className="usuario">
                        <button className="btn perfil">Perfil</button>
                        <label>{user}</label>
                    </div>
                </Link>
            </nav>
            
            </> 

            :

            <>
            <button className="btn fechar">Fechar aula</button>
            <div>
                <label htmlFor="edicao">Edição</label>
                {edicaoShow && 
                <ul name="edicao">
                    <li>
                        <p>Adicionar Objeto</p>
                        <ul>
                            <li><input type="text" placeholder="Nome" /></li>
                            <li><input type="file" placeholder="Arquivo" /></li>
                        </ul>
                    </li>
                    <li>
                        <p>Excluir Aula</p>
                        <ul>
                            <label>Excluir Aula?</label>
                            <button className="confirm nao">Não</button>
                            <button className="confirm sim">Sim</button>
                        </ul>
                    </li>
                </ul>
                }
            </div>
            <h1 className="codigo_aula">{codigo}</h1>
            <button className="btn trocar" onClick={() => {setSelecionarShow(true)}}>Trocar aula</button>
            <h1 className="num_alunos">{numAlunos}</h1>
            </>
            }
        </header>
    )
}