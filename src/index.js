import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import	'./Firebase/config';
import { getFirestore,collection,getDocs} from 'firebase/firestore';

ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
//obtener base de datos
const db = getFirestore();
const usuariosRef = collection(db, "usuarios");
getDocs(usuariosRef).then(res=>console.log(res.docs.map(usuario =>({...usuario.data()}))))




