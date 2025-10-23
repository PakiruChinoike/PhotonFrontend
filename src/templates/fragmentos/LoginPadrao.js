import React from "react";
import { Link } from "react-router-dom";

export default function LoginPadrao({setIsLogin, setIsCadastro}) {



    return (
        <> 
            <h1>Photon</h1>
            <div>
                <h3>Login</h3> 
                <p>Digite o e-mail acadêmico cadastrado para acessar o aplicativo</p>
            </div>
            <div>
                <form>
                    <input type="email" id="email" name="email" placeholder="email"></input>
                </form>
                <form>
                    <input type="password" id="senha" name="senha" placeholder="senha"></input>
                </form>
             </div>   
            <div>
                <Link to='/'>
                    <button>Login</button>
                </Link>
                <h3>Ou</h3>
                <button onClick={() => { setIsCadastro(true) } }>Cadastro</button>
            </div>
        </>
    )

}