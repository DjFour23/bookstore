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

const collectionBook = 'libros';
const collectionChat = 'chat';
// validar url
export const validURL = async (url) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ) 
  return !!pattern.test(url);
}
// validar formulario libros
export const validado = async (nombre, autor, descripcion, genero, year, disponible, caratula) => {
  let ok = true
  let response = { correcto: ok, campo: "" }
  const campos = [nombre, autor, descripcion, year, genero, disponible, caratula]
  const name = ["title", "author", "description", "year", "book type", "available", "book cover"]
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
export const getLibros = async () => await getDocs(collection(db, collectionBook));
// Obtener un libro
export const getLibro = (id) => getDoc(doc(db, collectionBook, id));
// Eliminar un libro
export const deleteLibro = async (id) => await deleteDoc(doc(db, collectionBook, id));
// Guardar un libro
export const saveLibro = async (nombre, autor, descripcion, genero, year, disponible, caratula) => {

  await addDoc(collection(db, collectionBook), {
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
  await updateDoc(doc(db, collectionBook, id), {
    nombre: nombre,
    autor: autor,
    descripcion: descripcion,
    genero: genero,
    year: parseInt(year),
    disponible: Boolean(disponible),
    caratula: caratula
  });

// validar formulario registro usuario
export const registerOk = async (nombre,apellido,email,password,role) => {
  let ok = true
  let response = { correcto: ok, campo: "" }
  const campos = [nombre,apellido,email,password,role]
  const name = ["name", "lasname", "email", "password", "role"]
  for (const key in campos) {
    if (campos[key] === "" || campos[key] === "0") {
      ok = false
      response = { correcto: ok, campo: name[key] }
      break
    }
  }

  return response
}

// Query: User's info
export const info = async (usuario) => {
  const docRef = doc(db, `usuarios/${usuario.uid}`)
  const query = await getDoc(docRef)
  const info =  query.data()
  return info

}
// Enviar mensaje
export const mensaje = async (mensaje,id,usuario) => {
  const usuarioInfo = await info(usuario)
  await addDoc(collection(db, collectionChat), {
    usuario_id: id,
    nombre: usuarioInfo.name,
    mensaje,
    timestamp: Date.now(),
  });
}

