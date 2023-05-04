import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  addDoc,
  updateDoc
} from "firebase/firestore"
import { db } from "./../config"
import swal from "sweetalert";

const collectionName = 'libros';
// validar formulario
export const validado = async (nombre, autor, descripcion, genero, year, disponible, caratula) => {
  let ok = true
  let response = { correcto: ok, campo: "" }
  const campos = [nombre, autor, descripcion, genero, year, disponible, caratula]
  const name = ["title", "author", "description", "book type", "year", "available", "book cover"]
  for (const key in campos) {
    if (campos[key] === "" || campos[key] === "0") {
      ok = false
      response = { correcto: ok, campo: name[key] }
      break
    }
  }

  return response
}
// Obtener libros
export const getLibros = async () => await getDocs(collection(db, collectionName));
// Obtener un libro
export const getLibro = (id) => getDoc(doc(db, collectionName, id));
// Eliminar un libro
export const deleteLibro = async (id) => await deleteDoc(doc(db, collectionName, id));
// Guardar un libro
export const saveLibro = async (nombre, autor, descripcion, genero, year, disponible, caratula) => {

  await addDoc(collection(db, collectionName), {
    nombre: nombre,
    autor: autor,
    descripcion: descripcion,
    genero: genero,
    year: parseInt(year),
    disponible: Boolean(disponible),
    caratula: caratula
  });
}

// Actualizar libro
export const updateLibro = async (id, nombre, autor, descripcion, genero, year, disponible, caratula) =>
  await updateDoc(doc(db, collectionName, id), {
    nombre: nombre,
    autor: autor,
    descripcion: descripcion,
    genero: genero,
    year: parseInt(year),
    disponible: Boolean(disponible),
    caratula: caratula
  });

