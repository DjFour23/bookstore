import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

const firebaseConfig = {
  apiKey: "AIzaSyD9i7bogmKSkAu_eB0CqY2xLtUtBEZKGvY",
  authDomain: "bookstore-ea5f3.firebaseapp.com",
  databaseURL: "https://bookstore-ea5f3-default-rtdb.firebaseio.com",
  projectId: "bookstore-ea5f3",
  storageBucket: "bookstore-ea5f3.appspot.com",
  messagingSenderId: "678045471115",
  appId: "1:678045471115:web:8610d73f1a46e4d8971f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

console.log(db);