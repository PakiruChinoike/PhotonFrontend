import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsuarioByEmail } from "../api/UsuarioCRUD";
import { useUser } from "../../context/UserContext";

export default function LoginPadrao({setIsLogin, setIsCadastro}) {
    const { login } = useUser()

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const loginAttempt = async () => {
        const userAttempt = await getUsuarioByEmail(email.trim())
        if (!userAttempt || userAttempt[0].senha != senha.trim()) return;
        login(userAttempt[0])
        navigate("/", { replace: true })
    }

    return (
        <> 
            <h1>Photon</h1>
            <div>
                <h3>Login</h3> 
                <p>Digite o e-mail acadêmico cadastrado para acessar o aplicativo</p>
            </div>
            <div>
                <form>
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
                <button onClick={() => loginAttempt()}>Login</button>
                <h3>Ou</h3>
                <button onClick={() => { setIsCadastro(true) } }>Cadastro</button>
            </div>
        </>
    )

}