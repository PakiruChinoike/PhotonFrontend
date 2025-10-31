import React from "react";

export default function AulaObjeto({nomeAula, nomeProfessor, data}) {


    return (
        <div className="aula-objeto">
            <h1>{nomeAula}</h1>
            <h3>{nomeProfessor}</h3>
            <h3>{data}</h3>
        </div>
    )
}