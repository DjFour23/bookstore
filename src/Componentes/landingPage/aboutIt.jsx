import React, { Component } from "react";

class aboutIt extends Component {
  render() {
    return (
      <>
        <a name="aboutIt" href="/#" style={{height: "1px",width: "1px", position: 'absolute', overflow: 'hidden'}}>.</a>
        <div className="container">
          <div className="row">
            <div className="card text-center  border-info  text-bg-dark ">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <p className="card-text lead mb-4 fw-semibold">
                  {" "}
                  ¿Necesitas una herramienta donde clasificar tus libros
                  favoritos y no perderlos?.
                  <br />
                  Book Store está para tí; poseemos un apartado donde podras
                  buscar tus obras favoritas, ver si sinopsis y posteriormente
                  catalogarla como favorito, estos favoritos los podras ver
                  desde tu perfil. Tambien poseemos un modulo de chat, para que
                  puedas darnos feedback :).
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default aboutIt;
