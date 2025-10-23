import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUsuario } from "../api/UsuarioCRUD";

export default function Cadastrando() {
    
    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const realizaCadastro = async (e) => {
        e.preventDefault()

        var data = {
            "nome": nome.trim(),
            "senha": senha.trim()
        }

        try {
            await addUsuario(email.trim(), data)
            alert("Usuário cadastrado com sucesso!")
            navigate("/", { replace: true})
        } catch (err) {
            alert(err.message)
            console.error("Erro", err)
        }
    }

    return (
        <>
            <h1>Photon</h1>
                <div>
                    <h3>Cadastre uma conta</h3>
                    <p>Digite seu e-mail para se cadastrar neste aplicativo</p>
                </div>
                <div>
                    <form>
                        <input 
                            type="name" 
                            id="nome" 
                            name="nome" 
                            placeholder="nome" 
                            value={nome}
                            onChange={(e) => {setNome(e.target.value)}} 
                        />
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="email" 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}} 
                        />
                        <input 
                            type="password" 
                            id="senha" name="senha" 
                            placeholder="senha" 
                            value={senha}
                            onChange={(e) => {setSenha(e.target.value)}}
                        />
                    </form>
                </div>
                <div>
                    <button onClick={(e) => realizaCadastro(e)}>Cadastrar professor</button>
                </div>
        </>
    )
    
}