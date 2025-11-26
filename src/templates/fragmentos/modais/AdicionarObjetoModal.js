import React, {useState} from "react";
import { useUser } from "../../../context/UserContext";
import { addAula } from "../../api/ObjetoCRUD";

export default function AdicionarObjetoModal({show, setShow}) {
    const { user } = useUser();

    const [nome, setNome] = useState("")
    const [objetos, setObjetos] = useState([])

    const [novoNomeObjeto, setNovoNomeObjeto] = useState("");
    const [novoArquivoObjeto, setNovoArquivoObjeto] = useState(null);

    const [showAdicionarObjeto, setShowAdicionarObjeto] = useState(false);

    const salvarObjeto = () =>{
        const novoObj ={
            nome:novoNomeObjeto,
            file:novoArquivoObjeto
        };

        setObjetos([...objetos, novoObj]);

        setNovoNomeObjeto("");
        setNovoArquivoObjeto(null);
        setShowAdicionarObjeto(false);
    }

    return(
        <>
            {show &&
                <modal id="EditarAula" className="modal">
                    <form>
                        <div>
                            <div>
                                <label htmlFor="arquivosAula"><h2>Arquivos da aula:</h2></label> <p data-tooltip-id="asterisco" data-tooltip-content=".obj .gltf .glb" className="asterisco">*</p>
                                <Tooltip id="asterisco" />
                            </div>
                            <input 
                            type="file"
                            id="arquivosAula" 
                            name="arquivosAula"
                            multiple 
                            required
                            />
                        </div>
                        <input type="button" value="SalvarObj" onClick={(e) => salvarObjeto(e)}/>
                        <input type="button" value="Criar" onClick={(e) => criaAula(e)} />
                    </form>
                    <button className="fecharModal" onClick={() => setShow(false)}>X</button>
                </modal>
            }
        </>
    )
}