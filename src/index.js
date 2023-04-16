import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
//import { db } from './Firebase/config'; // base de datos
//import {collection, getDocs } from 'firebase/firestore';

ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
/*
// obtener base de datos ejemplo - https://firebase.google.com/docs/firestore/query-data/queries?hl=es-419
const usuariosRef = collection(db, "usuarios");
getDocs(usuariosRef).then(res => console.log(res.docs.map(usuario => ({ ...usuario.data() }))))
*/




