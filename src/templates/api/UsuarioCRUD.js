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

export const addUsuario = async (email, data) => {
  try {
    const docRef = await addDoc(collection(db, "usuarios"), {
      nome: data.nome,
      senha: data.senha,
      email: email,
    })
    console.log("document writtend with ID: ", docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e)
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
  const id = sanitizeEmail(email);
  const q = query(usuariosRef, where("email", "==", id));
  const snapshot = await getDocs(q);

  const resultados = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(resultados);
  return resultados;
};
 