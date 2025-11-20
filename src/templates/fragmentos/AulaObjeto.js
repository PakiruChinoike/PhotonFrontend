import React from "react";

export default function AulaObjeto({nomeAula, nomeProfessor, data}) {


    return (
        <div className="aula-objeto">

            <div className="filtros">
                <div className="campo nome">{nomeProfessor}</div>
                <div className="campo data">{data}</div>
            </div>

            <div className="aula-card">
                <h1>{nomeAula}</h1>
            </div>
            
        </div>
    )
}