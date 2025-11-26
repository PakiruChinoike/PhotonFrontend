import React, { useState } from "react"
import { Tooltip } from "react-tooltip"
import { useUser } from "../../../context/UserContext";
import { addAula } from "../../api/AulaCRUD";

export default function CriarAulaModal({show, setShow}) {
    const { user } = useUser();

    const [nome, setNome] = useState("")
    const [objetos, setObjetos] = useState([])


    const criaAula = async (e) => {
        e.preventDefault()

        var data = {
            "nome": nome.trim(),
            "objetos": objetos,
            "usuario": user.id,
        }

        try {
            var response = await addAula(data)
            console.log(response)
            setShow(false)
        } catch (err) {
            alert(err.message)
            console.error("Erro", err)
        } 
    }

    return (
        <>
        {show && 
            <modal id="CriarAulaModal" className="modal">
                <form>
                    <label htmlFor="nomeAula"><h2>Nome da Aula:</h2></label>
                    <input 
                        type="text" 
                        id="nomeAula"
                        name="nomeAula"
                        placeholder="Nome da Aula"
                        value={nome}
                        onChange={(e) => {setNome(e.target.value)}} 
                        required
                    />
                    <div>
                    <label htmlFor="arquivosAula"><h2>Arquivos da aula:</h2></label> <p data-tooltip-id="asterisco" data-tooltip-content=".obj .gltf .glb" className="asterisco">*</p>
                    <Tooltip id="asterisco" />
                    </div>
                    <input 
                        type="file"
                        id="arquivosAula" 
                        name="arquivosAula"
                        onChange={(e) => {setObjetos(e.target.files)}} 
                        multiple 
                        required
                    />
                    <input type="button" value="Criar" onClick={(e) => criaAula(e)} />
                </form>
                <button className="fecharModal" onClick={() => setShow(false)}>X</button>
            </modal>
        }        
        </>
    )
}