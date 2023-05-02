import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc
} from "firebase/firestore"
import { db } from "./../config"

const collectionName = "libros";
// Obtener libros
export const getLibros = () => getDocs(collection(db, collectionName));
// Eliminar un libro
export const deleteLibro = (id) => deleteDoc(doc(db, collectionName, id));
// Guardar un libro
export const saveLibro = (newLibro) =>
  addDoc(collection(db, collectionName), newLibro);
// Actualizar libro
export const updateLibro = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

