import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addUsuario } from "../api/UsuarioCRUD";
import { useUser } from "../../context/UserContext";

export default function Cadastrando({ setIsCadastro }) {
    const { login } = useUser();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmar, setSenhaConfirmar] = useState("");

    const nomeRef = useRef(null);
    const emailRef = useRef(null);
    const senhaRef = useRef(null);
    const confirmarRef = useRef(null);

    const verificaSenha = (senha) => {
        const regex = /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?!.*\s).{8,}$/;
        return regex.test(senha);
    };

    const realizaCadastro = async (e) => {
        e.preventDefault();

        if (!nome.trim()) return nomeRef.current?.focus();
        if (!email.trim()) return emailRef.current?.focus();

        if (!verificaSenha(senha.trim())) {
            alert("A senha precisa ter pelo menos 8 caracteres, 1 número e 1 caractere especial");
            return senhaRef.current?.focus();
        }

        if (senha.trim() !== senhaConfirmar.trim()) {
            alert("As senhas não coincidem");
            return confirmarRef.current?.focus();
        }

        const data = {
            nome: nome.trim(),
            senha: senha.trim(),
            email: email.trim(),
        };

        try {
            const response = await addUsuario(data);
            login(response);
            alert("Usuário cadastrado com sucesso!");
            navigate("/", { replace: true });
        } catch (err) {
            alert(err.message);
            console.error("Erro", err);
        }
    };

    const handleNomeEnter = (e) => {
        if (e.key === "Enter") {
            if (nome.trim()) emailRef.current?.focus();
            else nomeRef.current?.focus();
        }
    };

    const handleEmailEnter = (e) => {
        if (e.key === "Enter") {
            if (email.trim()) senhaRef.current?.focus();
            else emailRef.current?.focus();
        }
    };

    const handleSenhaEnter = (e) => {
        if (e.key === "Enter") {
            if (senha.trim()) confirmarRef.current?.focus();
            else senhaRef.current?.focus();
        }
    };

    const handleConfirmarEnter = (e) => {
        if (e.key === "Enter") {
            realizaCadastro(e); 
        }
    };


    return (
        <>
            <h1>Photon</h1>
            <div>
                <h3>Cadastre uma conta</h3>
                <p>Digite seu e-mail para se cadastrar neste aplicativo</p>
            </div>

            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={nomeRef}
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        onKeyDown={handleNomeEnter}
                    />

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

                    <input
                        ref={confirmarRef}
                        type="password"
                        id="senhaConfirmar"
                        name="senhaConfirmar"
                        placeholder="confirmar senha"
                        value={senhaConfirmar}
                        onChange={(e) => setSenhaConfirmar(e.target.value)}
                        onKeyDown={handleConfirmarEnter}
                    />
                </form>
            </div>

            <div>
                <button onClick={realizaCadastro}>Cadastrar professor</button>
                <h3>Ou</h3>
                <button onClick={() => setIsCadastro(false)}>Login</button>
            </div>
        </>
    );
}
