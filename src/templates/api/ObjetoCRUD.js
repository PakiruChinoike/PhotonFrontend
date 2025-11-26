import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL } from "firebase/storage";
import { ref, uploadBytes } from "firebase/storage";

export const uploadArquivo = async (file) => {
    const ext = file.name.split(".").pop();

    const tipos = {
        glb: "model/gltf-binary",
        gltf: "model/gltf+json",
    };

    const tipo = tipos[ext] ?? file.type;

    const storageRef = ref(storage, `objetos/${Date.now()}-${file.name}`)

    const snapshot = await uploadBytes(storageRef, file, {
        contentType: tipo
    })

    const url = await getDownloadURL(snapshot.ref);

    return url
}

export const addObjeto = async (data) => {
 try {
        const url = await uploadArquivo(data.file);

        const docRef = await addDoc(collection(db, "objetos"), {
            nome: data.nome,
            data: new Date(),
            url: url,
            aula: data.aula,
            usuario: data.usuario,
        });

        console.log("Objeto salvo com ID:", docRef.id);
        return docRef.id;

    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
}

export const getObjetosByAula = async (aulaId) => {
    try {
        const aulaPath = `/aulas/${aulaId}`

        const objetosRef = collection(db, "objetos");
        const q = query(objetosRef, where("aula", "==", aulaPath));

        const snapshot = await getDocs(q);

        const resultados = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        console.log("Objetos encontrados:", resultados);
        return resultados;

    } catch (e) {
        console.error("Erro ao buscar objetos:", e);
        return [];
    }
}