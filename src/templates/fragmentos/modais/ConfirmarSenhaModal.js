import React, { useEffect, useState } from "react";
import { useUser } from "../../../context/UserContext";
import { useConfirmacao } from "../../../context/ConfirmacaoContext";

export default function ConfirmarSenhaModal({show, setShow}) {
    const { user } = useUser()
    const { confirmar } = useConfirmacao()
    const [senha, setSenha] = useState("")
    const [mostrar, setMostrar] = useState(false)

    const confirmaSenha = (e) => {
        e.preventDefault()

        if (senha != user.senha ) {
            alert("Senha Incorreta!")
        } else {
            confirmar()
            setShow(false)
        }
    }

    return (
        <>
        {show && 
            <modal id="ConfirmarSenhaModal" className="modal">
                <form>
                    <label htmlFor="confirmarSenha">Confirme sua senha:</label>
                    <div>
                        <input 
                            type= {mostrar ? "text" : "password"}
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="confirmarSenha"
                            value={senha}
                            onChange={(e) => {setSenha(e.target.value)}}
                        />
                        <button
                            type="button"
                            className="verSenhaBotao"
                            onClick={() => setMostrar (!mostrar)}
                            >
                            {!mostrar && "\u{1F441}" }
                        </button>
                    </div>
                    <button type="submit" onClick={(e) => confirmaSenha(e)}>Ok</button>
                </form>
                <button className="fecharModal" onClick={() => setShow(false)}>X</button>
            </modal>
        }
        </>
    )

}
