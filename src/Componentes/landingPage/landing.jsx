import React, { Component } from "react";
import NavBar from "../utils/navBar";
import AboutUs from "./aboutUs";

class landing extends Component {
  render() {
    return (
      <>
        <header class="header">
          <NavBar />
          <div class="container-xxl bd-gutter mt-5">
            <div class="col-md-8 mx-auto text-center">
              <h1 class="mb-5 fw-bold display-1">
                <i class="fa-solid fa-book-open-reader fa-beat-fade fa-xl"> </i>
                <i class="fa-xl"> Book Store</i>
              </h1>
              <p class="lead mb-4 fw-semibold">
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
