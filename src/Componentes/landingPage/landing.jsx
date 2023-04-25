import React, { Component } from "react";
import NavBar from "../utils/navBar";
import AboutUs from "./aboutUs";

class landing extends Component {
  render() {
    return (
      <>
        <header className="header">
          <NavBar />
          <div className="container-xxl bd-gutter mt-5">
            <div className="col-md-8 mx-auto text-center">
              <h1 className="mb-5 fw-bold display-1">
                <i className="fa-solid fa-book-open-reader fa-beat-fade fa-xl"> </i>
                <i className="fa-xl"> Book Store</i>
              </h1>
              <p className="lead mb-4 fw-semibold">
                ¿Necesitas una herramienta donde clasificar tus{" "}
                <mark>libros favoritos</mark>y no perderlos?. <br/> Book Store está
                para tí; poseemos un apartado donde podras buscar tus obras
                favoritas, ver si sinopsis y posteriormente catalogarla como
                favorito, estos favoritos los podras ver desde tu perfil.
                Tambien poseemos un modulo de chat, para que puedas darnos
                feedback :).
              </p>
            </div>
          </div>
        </header>
        <br />
        <AboutUs />
      </>
    );
  }
}

export default landing;
