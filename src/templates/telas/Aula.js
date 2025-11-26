import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../fragmentos/Header";
import CriarAulaModal from "../fragmentos/modais/CriarAulaModal";
import EditarAulaModal from "../fragmentos/modais/EditarAulaModal";
import SelecionarAulaModal from "../fragmentos/modais/SelecionarAulaModal";
import { useNavigate } from "react-router-dom";
import QrCode from "../fragmentos/QrCode";
import { getAulaById } from "../api/AulaCRUD";
import { getObjetosByAula } from "../api/ObjetoCRUD";
import PainelObjeto from "../fragmentos/PainelObjeto";
import { useHeader } from "../../context/HeaderContext";
import ObjetoExibido from "../fragmentos/ObjetoExibido";

export default function Aula() {
    const { id } = useParams();
    const { ativaAula, desativaAula } = useHeader();
    const navigate = useNavigate();
    const [selecionarShow, setSelecionarShow] = useState(false);
    const [criarAulaShow, setCriarAulaShow] = useState(false);
    const [editarAulaShow, setEditarAulaShow] = useState(false);
    const [aula, setAula] = useState(null);
    const [objetos, setObjetos] = useState([]);
    const [url, setUrl] = useState(null); 

    function removerObjeto(id) {
        setAula(prev => ({
            ...prev,
            objetos: prev.objetos.filter(o => o.id !== id)
        }));
    }

    useEffect(() => {
        ativaAula()
    }, [])

    useEffect(() => {
        const carregarAula = async () => {
            try {
                const response = await getAulaById(id)
                console.log(response)
                setAula(response[0]) 
            } catch (err) {
                console.error("Error: ", err)
            }
        }

        const carregarObjetos = async () => {
            try {
                const response = await getObjetosByAula(id)
                console.log(response)
                setObjetos(response)
                setUrl(response[0].url)
            } catch (err) {
                console.error("Error: ", err)
            }
        }

        carregarAula()
        carregarObjetos()
    }, [id])

    return (
        <>
        <CriarAulaModal show={criarAulaShow} setShow={setCriarAulaShow} />
        <SelecionarAulaModal show={selecionarShow} setShow={setSelecionarShow} setShowCriar={setCriarAulaShow}/>
        <EditarAulaModal show={editarAulaShow} setShow={setEditarAulaShow} aula={aula} setAula={setAula}/>
        <Header
            setSelecionarShow={setSelecionarShow}
            setCriarAulaShow={setCriarAulaShow}
            setEditarAulaShow={setEditarAulaShow}
        />

        <div className="Aula" id="Aula">
            <div className="listaObj">
                {aula && aula.objetos.length === 0 && (
                    <div className="empty-msg">Nenhum objeto adicionado</div>
                )}


                {aula && aula.objetos.map(obj => (
                    <div key={obj.id} className="objeto-card">
                        <div className="objeto-topo">
                        <span className="nome-obj">{obj.nome}</span>
                            <button className="btn-lixeira" onClick={() => removerObjeto(obj.id)} title="Excluir objeto">🗑️</button>
                        </div>


                        <div className="preview-wrap">
                            {obj.preview ? (
                                obj.tipo.startsWith("image/") ? (
                                    <img src={obj.preview} alt={obj.nome} />
                                ) : (
                                    <img src={""} alt="3d" />
                                )
                                ) : (
                                    <img src={""} alt="placeholder" />
                                    )}
                        </div>
                    </div>
                    ))}
                </div>
        
                {url && 
                    <>
                        <ObjetoExibido url={url} name={"Nome"} />
                    </>
                }
        </div>
    </>
  );
}