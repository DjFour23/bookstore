import React, { Component } from "react";

class navBar extends Component {
  render() {
    return (
      <>
          <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav m-auto">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="/about"
                    >
                      Cosa
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Pricing
                    </a>
                  </li>
                </ul>
                <a
                class="btn btn-primary"
                role="button"
                aria-current="page"
                href="/about"
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
