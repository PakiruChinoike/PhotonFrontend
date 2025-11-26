import React from "react";

import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

    /* 
        email: String
        nome: String
        senha: String
    */

function sanitizeEmail(email) {
  return email.trim().toLowerCase().replace(/\//g, "_");
}

export const addUsuario = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "usuarios"), {
      nome: data.nome,
      senha: data.senha,
      email: data.email,
    })
    console.log("Document written with ID: ", docRef.id)
    return docRef.data
  } catch (e) {
    console.error("Error adding document: ", e)
    return false
  }
}

export const getUsuarioByEmail = async (email) => {
  const usuariosRef = collection(db, "usuarios");
  const q = query(usuariosRef, where("email", "==", email));
  const snapshot = await getDocs(q);

  const resultados = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(resultados);
  return resultados;
};
 