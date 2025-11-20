import React, { useEffect, useState } from "react"

import Header from "../fragmentos/Header"
import SelecionarAulaModal from "../fragmentos/modais/SelecionarAulaModal"
import { getAulaByUsuario } from "../api/AulaCRUD"
import AulaObjeto from "../fragmentos/AulaObjeto"
import CriarAulaModal from "../fragmentos/modais/CriarAulaModal"

export default function Home() {
    const [selecionarShow, setSelecionarShow] = useState(false)
    const [criarAulaShow, setCriarAulaShow] = useState(false)
    const [aulas, setAulas] = useState([])

    useEffect(() => {
        const fetchAulas = async () => {
            const fetchedAulas = await getAulaByUsuario(1)
            setAulas(fetchedAulas)

            fetchedAulas.forEach(aula => {
                console.log(aula)
            });
        }

        fetchAulas()
    }, [])

    return (
        <>
        <CriarAulaModal show={criarAulaShow} setShow={setCriarAulaShow} />
        <SelecionarAulaModal show={selecionarShow} setShow={setSelecionarShow} setShowCriar={setCriarAulaShow}/>
        <Header setSelecionarShow={setSelecionarShow} setCriarAulaShow={setCriarAulaShow}/>
        <div className="Home" id="Home">
            {aulas.map((aula) => (
                <AulaObjeto 
                    key={aula.id}
                    nomeAula={aula.nome_aula} 
                    nomeProfessor={aula.nome_professor} 
                    data={aula.data} 
                />
            ))}
        </div>
        </>
    )
}