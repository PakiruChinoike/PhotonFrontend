import React, { useEffect, useState } from "react";
import { getAulaByUsuario } from "../../api/AulaCRUD";

export default function SelecionarAulaModal({show, setShow, setShowCriar}) {
    const [aulas, setAulas] = useState([])

    useEffect(() => {
        if (!show) return

        const buscaAulas = async () => {
            try {
                const response = await getAulaByUsuario(1)
                setAulas(response)
            } catch (e) {
                console.error(e)
            }
        }

        buscaAulas()
    }, [show])

    return (
        <>
        {show && 
            <div id="SelecionarAulaModal" className="modal">
                {
                    !(aulas.length > 0) ? 
                    <>
                    <h2>Selecione a Aula</h2>
                    <select>
                    {aulas.map((aula) => (
                        <option key={aula.id} value={aula.id}>
                            {aula.nome}
                        </option>
                    ))}
                    </select>
                    <button>Abrir</button>
                    </> 
                    :
                    <>
                    <h2>Você não possui nenhuma aula no momento</h2>
                    <button onClick={() => {
                        setShowCriar(true) 
                        setShow(false)
                    }}>Criar?</button>
                    </>
                }
                <button className="fecharModal" onClick={() => setShow(false)}>X</button>
            </div>
        }
        </>
    )

}