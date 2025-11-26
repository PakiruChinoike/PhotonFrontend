import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Modelo3D({ url }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={1} />;
}

export default function PainelObjeto({ url }) {
    return (
        <div
            className="aula-objeto"
            style={{
                width: "100%",
                height: "300px",
                background: "#eee",
                borderRadius: "10px",
                overflow: "hidden"
            }}
        >
            <Canvas camera={{ position: [0.1, 0.1, 0.1], fov: 30 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                
                <Suspense fallback={null}>
                    <Modelo3D url={url} />
                </Suspense>

                <OrbitControls enableZoom={true} />
            </Canvas>
        </div>
    );
}

// Necessário para permitir cache de modelos GLTF
useGLTF.preload();
