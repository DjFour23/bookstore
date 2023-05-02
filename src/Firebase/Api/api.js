import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore"
import { db } from "./../config"

const collectionName = "libros";
// obtener libros
export const getLibros = () => getDocs(collection(db, collectionName));
// eliminar un libro
export const deleteLibro = (id) => deleteDoc(doc(db, collectionName, id));

