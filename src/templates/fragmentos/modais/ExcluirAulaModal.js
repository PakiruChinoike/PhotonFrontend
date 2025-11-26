import React from "react";

export default function ExcluirAulaModal({ show, setShow, aula, onExcluir }) {

    if (!show) return null;

    return (
        <>
            {show &&
                <div id="ExcluirAula" className="modal">
                    <form>

                        <h2>Tem certeza que deseja excluir esta aula?</h2>

                        <h3> {aula?.nome} </h3>

                        <div>
                            <button type="button" className="btnExcluir" onClick={() => { onExcluir(aula.id); setShow(false);}}> Excluir </button>
                        </div>
                    </form>

                    <button className="fecharModal" onClick={() => setShow(false)}>X</button>
                </div>
            } 
        </>
    );
}