import React, { Component } from "react";

class navBar extends Component {
  render() {
    return (
      <>
          <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/login"
                    >
                      Cosa
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Libros">
                      Libros
                    </a>
                  </li>
                </ul>
                <a
                className="btn btn-primary"
                role="button"
                aria-current="page"
                href="/login"
              >
                Login
              </a>
              </div>
              
            </div>
          </nav>
      </>
    );
  }
}

export default navBar;
