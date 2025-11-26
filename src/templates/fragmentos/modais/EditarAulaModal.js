import React, {useState} from "react"

export default function EditarAulaModal({ show, setShow, aula, setAula }) {
    const [objetos, setObjetos] = useState([]);
    const [novoNomeObjeto, setNovoNomeObjeto] = useState("");
    const [novoArquivoObjeto, setNovoArquivoObjeto] = useState(null);
    const [showAdicionarObjeto, setShowAdicionarObjeto] = useState(false);
    const [showConfirmarExclusao, setShowConfirmarExclusao] = useState(false);

    const salvarObjeto = () => {
        if (!novoNomeObjeto || !novoArquivoObjeto) {
            alert("Preencha o nome e selecione o arquivo!");
            return;
        }

        setObjetos(prev => [...prev, {
            nome: novoNomeObjeto,
            file: novoArquivoObjeto
        }]);

        setNovoNomeObjeto("");
        setNovoArquivoObjeto(null);
        setShowAdicionarObjeto(false);
    };

    return (
        <>
            {show && 
                <div id="EditarAulaModal" className="modal">
                    <form>
                        <div>
                            <h2>Editar Aula</h2>

                            <button
                                type="button"
                                onClick={() => setShowAdicionarObjeto(true)}
                            >
                                Adicionar Objeto
                            </button>

                            <button
                                type="button"
                                onClick={() => setShowConfirmarExclusao(true)}
                            >
                                Excluir Aula
                            </button>
                        </div>
                    </form>

                    <button
                        className="fecharModal"
                        type="button"
                        onClick={() => setShow(false)}
                    >
                        X
                    </button>
                </div>
            }
        </>
    );
}
