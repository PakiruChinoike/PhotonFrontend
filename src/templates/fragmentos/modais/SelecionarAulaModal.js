import React, { useEffect, useState } from "react";
import { getAulaByUsuario } from "../../api/AulaCRUD";
import { useAula } from "../../../context/AulaContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

export default function SelecionarAulaModal({show, setShow, setShowCriar}) {
    const { aula, setAula } = useAula()
    const { user } = useUser()
    const [aulas, setAulas] = useState([])
    const [aulaSelecionada, setAulaSelecionada] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (!show) return

        const buscaAulas = async () => {
            try {
                const response = await getAulaByUsuario(user.id)
                setAulas(response)
                setAulaSelecionada(response[0].id)
            } catch (e) {
                console.error(e)
            }
        }

        buscaAulas()
    }, [show])

    const abrirAula = async (e) => {
        e.preventDefault()

        setAula(aulaSelecionada)
        navigate(`/aula/${aulaSelecionada}`)
    }

    return (
        <>
        {show && 
            <div id="SelecionarAulaModal" className="modal">
                {
                    (aulas.length > 0) ? 
                    <>
                    <h2>Selecione a Aula</h2>
                    <select id="AulaSelect" value={aulaSelecionada} onChange={(e) => {setAulaSelecionada(e.target.value)}}>
                    {aulas.map((aula) => (
                        <option key={aula.id} value={aula.id}>
                            {aula.nome}
                        </option>
                    ))}
                    </select>
                    <button onClick={(e) => {abrirAula(e)}}>Abrir</button>
                    </> 
                    :
                    <>
                    <h2>Você não possui nenhuma aula no momento</h2>
                    <button onClick={() => {
                        setShowCriar(true) 
                        setShow(false)
                    }}>Criar ?</button>
                    </>
                }
                <button className="fecharModal" onClick={() => setShow(false)}>X</button>
            </div>
        }
        </>
    )

}