import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
    return (
      <div className="formulario-Login"  margin-bottom = {"2.5rem!important"}>

        <form action="" className="Form">
        <div >
        <p>Regitrar</p>      
        </div>
          <div className="form-outline mb-4" >
            <label className="form-label"  margin-top= {"2rem"}>
              Name
            </label>
            <input type="text" name="nombre"  className="form-control"  margin-bottom = {"2.5rem!important"}/>
          </div>
          <div className="form-outline mb-4" >
            <label className="form-label" margin-top= {"2rem"}>
            Last name
            </label>
            <input type="text" name="apellido"  className="form-control"  margin-bottom = {"2.5rem!important"}/>
          </div>
          <div className="form-outline mb-4" >
            <label className="form-label"  margin-top= {"2rem"}>
              Email
            </label>
            <input type="email" name="email"   className="form-control"  margin-bottom = {"2.5rem!important"}/>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" >
              Password
            </label>
            <input type="password" name="password" className="form-control"  margin-bottom = {"2.5rem!important"}/>
          </div>

          <div className="btn1">
          <button type="button" className="btn btn-primary btn-block btn-lg" >
            Register
          </button>
          </div>

          <div className="text-center">
            <p>
              Not a member? <Link to="/about">Login</Link>
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
