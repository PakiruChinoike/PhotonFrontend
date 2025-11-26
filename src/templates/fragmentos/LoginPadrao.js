import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsuarioByEmail } from "../api/UsuarioCRUD";
import { useUser } from "../../context/UserContext";

export default function LoginPadrao({ setIsCadastro }) {
    const { login } = useUser();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // refs para focar nos inputs
    const senhaRef = useRef(null);
    const emailRef = useRef(null);

    const loginAttempt = async () => {
        if (!email.trim() || !senha.trim()) return;

        const userAttempt = await getUsuarioByEmail(email.trim());
        if (!userAttempt || userAttempt[0].senha !== senha.trim()) return;

        login(userAttempt[0]);
        navigate("/", { replace: true });
    };

    const handleEmailEnter = (e) => {
        if (e.key === "Enter") {
            if (email.trim()) {
                senhaRef.current?.focus();
            } else {
                // mantém foco no email se estiver vazio
                emailRef.current?.focus();
            }
        }
    };

    const handleSenhaEnter = (e) => {
        if (e.key === "Enter") {
            if (!email.trim()) {
                emailRef.current?.focus();
                return;
            }
            if (senha.trim()) loginAttempt();
        }
    };

    return (
        <>
            <h1>Photon</h1>
            <div>
                <h3>Login</h3>
                <p>Digite o e-mail acadêmico cadastrado para acessar o aplicativo</p>
            </div>

            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={emailRef}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={handleEmailEnter}
                    />

                    <input
                        ref={senhaRef}
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        onKeyDown={handleSenhaEnter}
                    />
                </form>
            </div>

            <div>
                <button onClick={loginAttempt}>Login</button>
                <h3>Ou</h3>
                <button onClick={() => setIsCadastro(true)}>Cadastro</button>
            </div>
        </>
    );
}
