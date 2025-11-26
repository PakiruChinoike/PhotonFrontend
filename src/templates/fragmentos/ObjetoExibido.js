import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import PainelObjeto from "./PainelObjeto";
import QrCode from "./QrCode";


export default function ObjetoExibido({ url, name }) {


    return (
        <div id="ObjetoExibido">
            <h1>{name}</h1>
            <PainelObjeto url={url} />
            <QrCode value={url} />
        </div>
    );
}
