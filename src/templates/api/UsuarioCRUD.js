import React from "react";

import { collection, getDoc, doc, setDoc, query, where, getDocs, addDoc } from "firebase/firestore";
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
    console.log("document writtend with ID: ", docRef.id)
    return docRef.data
  } catch (e) {
    console.error("Error adding document: ", e)
    return false
  }
}

// export const addUsuario = async (email, data) => {
//   const id = sanitizeEmail(email);
//   const ref = doc(db, "usuarios", id);
//   const snapshot = await getDoc(ref);

//   if (snapshot.exists()) {
//     throw new Error("E-mail já cadastrado");
//   }

//   await setDoc(ref, { ...data, email: id });
//   console.log({ ...data, email: id });
// };

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
 