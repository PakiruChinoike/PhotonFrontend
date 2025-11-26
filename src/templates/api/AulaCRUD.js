import { collection, query, where, getDocs, getDoc, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { addObjeto } from "./ObjetoCRUD";
import { ref, deleteObject } from "firebase/storage";

export const addAula = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "aulas"), {
            nome: data.nome,
            data: new Date(),
            usuario: `/usuarios/${data.usuario}`,
        });

        console.log("Aula criada com ID:", docRef.id);

        for (const obj of data.objetos) {
            await addObjeto({
                nome: obj.name,
                file: obj,
                aula: `/aulas/${docRef.id}`,
                usuario: `/usuarios/${data.usuario}`,
            });
        }

        return docRef.id;

    } catch (e) {
        console.error("Erro ao salvar aula:", e);
        return false;
    }
}

export const getAulaByUsuario = async (usuario) => {
    const aulasRef = collection(db, "aulas")
    const q = query(aulasRef, where("usuario", "==", `/usuarios/${usuario}`))
    const snapshot = await getDocs(q)

    const resultados = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    return resultados
}

export const getAulaById = async (id) => {
    const aulaRef = doc(db, "aulas", id);
    const snapshot = await getDoc(aulaRef);

    if (!snapshot.exists()) return null;

    return {
        id: snapshot.id,
        ...snapshot.data()
    };
}

export const deleteAula = async (id) => {
     try {
        const aulaRef = doc(db, "aulas", id);

        const objetosRef = collection(db, "objetos");
        const q = query(objetosRef, where("aula", "==", `/aulas/${id}`));
        const snapshot = await getDocs(q);

        for (const docObj of snapshot.docs) {
            const dados = docObj.data();
            if (dados.url) {
                const fileRef = ref(storage, dados.url);
                await deleteObject(fileRef).catch(() => {});
            }
            await deleteDoc(doc(db, "objetos", docObj.id));
        }

        await deleteDoc(aulaRef);

        console.log("Aula deletada com sucesso:", id);
        return true;

    } catch (error) {
        console.error("Erro ao deletar aula:", error);
        return false;
    }
}