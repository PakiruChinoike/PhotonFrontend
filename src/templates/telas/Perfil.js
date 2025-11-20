import React, {useContext, useEffect, useState} from "react"
import Header from "../fragmentos/Header"
import { addUsuario, getUsuarioByEmail } from "../api/UsuarioCRUD"
import { Navigate, useNavigate } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import SelecionarAulaModal from "../fragmentos/modais/SelecionarAulaModal"
import ConfirmarSenhaModal from "../fragmentos/modais/ConfirmarSenhaModal"
import { useQuery } from "@tanstack/react-query"
import { useConfirmacao } from "../../context/ConfirmacaoContext"

export default function Perfil() {
    const { user, logout } = useUser();
    const { confirmado, desconfirmar } = useConfirmacao();
    const navigate = useNavigate()

    const { data, isLoading, error } = useQuery({
        queryKey: ['usuario'],
        queryFn: async () => {
            const response = await getUsuarioByEmail(user.email)
            return response.json();
        },
        enabled: !!user,
    })

    const [showConfirmar, setShowConfirmar] = useState(false)
    const [foto, setFoto] = useState("")
    const [nome, setNome] = useState(user?.nome)
    const [email, setEmail] = useState(user?.email)
    const [senha, setSenha] = useState(user?.senha)

    useEffect(() => {
        desconfirmar()
    }, [])
    
    if (!user) {
        return <Navigate to="/login" replace />
    }

    const confirmaEdicao = async (e) => {
        e.preventDefault()

        if (!confirmado) setShowConfirmar(prev => !prev)
    }

    const editaFoto = async (e) => {
        e.preventDefault()

        var data={
            "foto": foto.trim(),
        }

        try {
            await addUsuario (foto.trim(), data)
            alert("Usuário editado com sucesso!")
        } catch (err){
            alert(err.message)
            console.error("Erro ao editar", err)
        }
    }

    const deslogar = () =>{
        logout()
        alert("Você saiu da sua conta!");
        navigate ("/login", {replace: true})
    }

    return (
        <>
        <ConfirmarSenhaModal show={showConfirmar} setShow={setShowConfirmar} />
        <Header />
        <div className="Perfil" id="Perfil">
            <div className="foto">
                <button onClick={(e) => editaFoto(e)}>&#x270F;</button>
                <img></img>
            </div>
            <div>
                <form>
                    <div>
                        <input 
                            type="name" 
                            id="nome" 
                            name="nome" 
                            placeholder="nome" 
                            className={confirmado ? "habilitado" : "desabilitado"}
                            value={nome}
                            disabled={!confirmado}
                            onChange={(e) => {setNome(e.target.value)}}
                        />
                        <button type="button" onClick={(e) => confirmaEdicao(e)}>&#x270F;</button>
                    </div>

                    <div>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="email" 
                            className={confirmado ? "habilitado" : "desabilitado"}
                            value={email}
                            disabled={!confirmado}
                            onChange={(e) => {setEmail(e.target.value)}} 
                        />
                        <button type="button" onClick={(e) => confirmaEdicao(e)}>&#x270F;</button>
                    </div>
                    
                    <div>
                        <input 
                            type="password" 
                            id="senha" name="senha" 
                            placeholder="senha" 
                            className={confirmado ? "habilitado" : "desabilitado"}
                            value={senha}
                            disabled={!confirmado}
                            onChange={(e) => {setSenha(e.target.value)}}
                        />
                        <button type="button" onClick={(e) => confirmaEdicao(e)}>&#x270F;</button>
                    </div>
                    
                </form>

                <button className="logout-btn" onClick={deslogar}>&#x1F6AA;&#xFE0E; Sair</button>
            </div>
            
        </div>
        </>
    )
}