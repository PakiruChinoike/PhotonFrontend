import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUsuario } from "../api/UsuarioCRUD";
import { useUser } from "../../context/UserContext";

export default function Cadastrando() {
    const { login } = useUser();
    
    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaConfirmar, setSenhaConfirmar] = useState("")

    const verificaSenha = (senha) => {
        const regex = /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?!.*\s).{8,}$/;

        return regex.test(senha);
    }

    const realizaCadastro = async (e) => {
        e.preventDefault()

        if (!verificaSenha) {
            alert("A senha precisa ter pelo menos 8 caracteres, 1 número e 1 caractere especial")
            return
        }

        if (senha.trim() != senhaConfirmar.trim() || !nome || !email ) return;

        var data = {
            "nome": nome.trim(),
            "senha": senha.trim(),
            "email": email.trim(),
        }

        try {
            var response = await addUsuario(data)
            console.log(response)
            login(data)
            alert("Usuário cadastrado com sucesso!")
            navigate("/", { replace: true })
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
                        <input 
                            type="password" 
                            id="senhaConfirmar" name="senhaConfirmar" 
                            placeholder="confirmar senha" 
                            value={senhaConfirmar}
                            onChange={(e) => {setSenhaConfirmar(e.target.value)}}
                        />
                    </form>
                </div>
                <div>
                    <button onClick={(e) => realizaCadastro(e)}>Cadastrar professor</button>
                </div>
        </>
    )
    
}