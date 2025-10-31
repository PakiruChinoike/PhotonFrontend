import React, {useContext, useEffect, useState} from "react"
import Header from "../fragmentos/Header"
import { addUsuario } from "../api/UsuarioCRUD"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import SelecionarAulaModal from "../fragmentos/SelecionarAulaModal"
import ConfirmarSenhaModal from "../fragmentos/ConfirmarSenhaModal"

export default function Perfil() {
    const { user, logout } = useUser();
    const navigate = useNavigate()

    const [shownConfirmar, setShownConfirmar] = useState(false)
    const [foto, setFoto] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    useEffect(() => {
        console.log("sexo")
    }, [])
    

    const confirmaEdicao = async (e) => {
        e.preventDefault()


    }

    const editaFoto = async (e) => {
        e.preventDefault()

        var data={
            "foto": foto.trim(),
        }

        try{
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
        <ConfirmarSenhaModal shown={shownConfirmar} setShown={setShownConfirmar} />
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
                        value={user}
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
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}} 
                             />
                             <button type="button" onClick={(e) => confirmaEdicao(e)}>&#x270F;</button>
                    </div>
                    
                    <div>
                            <input 
                            type="password" 
                            id="senha" name="senha" 
                            placeholder="senha" 
                            value={senha}
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