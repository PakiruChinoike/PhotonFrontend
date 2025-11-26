import React, { useState } from "react"
import LoginPadrao from "../fragmentos/LoginPadrao"
import Cadastrando from "../fragmentos/Cadastrando"

export default function Login() {
    
    const [isCadastro, setIsCadastro] = new useState(false)


    return (
        <div className="Login" id="Login">

                
                { !isCadastro ? 
                    <LoginPadrao setIsCadastro={setIsCadastro} />
                    :
                    <Cadastrando setIsCadastro={setIsCadastro} />
                }


                    
                <p>Ao continuar, você concorda com os nossos</p> 
                <p>Termos de Serviço e Política de Privacidade</p>
        </div>
    )
}