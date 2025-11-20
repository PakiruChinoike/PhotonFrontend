import React from "react"
import { Tooltip } from "react-tooltip"

export default function CriarAulaModal({show, setShow}) {

    

    return (
        <>
        {show && 
            <modal id="CriarAulaModal" className="modal">
                <form>
                    <label htmlFor="nomeAula"><h2>Nome da Aula:</h2></label>
                    <input type="text" name="nomeAula" />
                    <div>
                    <label htmlFor="arquivosAula"><h2>Arquivos da aula:</h2></label> <p data-tooltip-id="asterisco" data-tooltip-content=".obj .gltf .glb" className="asterisco">*</p>
                    <Tooltip id="asterisco" />
                    </div>
                    <input type="file" name="arquivosAula" multiple />
                    <input type="submit" value={"Criar"} />
                </form>
                <button className="fecharModal" onClick={() => setShow(false)}>X</button>
            </modal>
        }        
        </>
    )
}