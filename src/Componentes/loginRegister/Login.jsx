import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="formulario-Login"  margin-bottom = {"2.5rem!important"}>

        <form className="Form">
        <div >
        <p bg={"red"}>Iniciar Sesión</p>      
        </div>
          <div className="form-outline mb-4" >
            <label  className="form-label" htmlFor="form2Example1" margin-top= {"2rem"}>
              Email
            </label>
            <input type="email" id="form2Example1" className="form-control"  margin-bottom = {"2.5rem!important"}/>
          </div>
          <div className="form-outline mb-4">
            <label  className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input type="password" id="form2Example2" className="form-control"  margin-bottom = {"2.5rem!important"}/>
          </div>

          <div className="btn1">
          <button type="button" className="btn btn-primary btn-block btn-lg" >
            Ingresar
          </button>
          </div>

          <div className="text-center">
            <p>
              Not a member? <Link to="/signUp">Register</Link>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
