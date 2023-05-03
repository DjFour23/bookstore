import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../../Context/authContext";
import { auth } from "./../../Firebase/config";
import swal from "sweetalert";
import "./login.css";


export function Login() {

  // Initialize User
  const [usuario, setUser] = useState({
    email: "",
    password: "",
  });
  // Methods AuthContext
  const { login, role } = useAuth();

  // Initialize navigate
  const navigate = useNavigate();

  // Form
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      if (usuario.email === "" && usuario.password === "")
        return swal({
          title: "Error",
          text: `Complete the form`,
          icon: "error",
        });
      if (usuario.password === "")
        return swal({
          title: "Error",
          text: `Type a password`,
          icon: "error",
        });
      // Login (firebase)
      await login(usuario.email, usuario.password);
      const user = auth.currentUser;
      // Query user's rol
      // admin 1
      // user 2
      const rol = await role(user);
      rol === 1 ? navigate("/HomeAdmin") : navigate("/HomeUser");
    } catch (error) {
      swal({
        title: "Authentication Error",
        text: `Oops`,
        icon: "error",
      });
    }
  };


  // HTML Login form
  return (
    <>
      <main className="contentForm container">
        <h2 style={{marginBottom: '20px'}}>Login</h2>
        <div className="boxForm">
          <form >
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                onChange={({ target }) => {
                  setUser((data) => ({...data, email: target.value }));
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={({ target }) => {
                  setUser((data) => ({...data, password: target.value }));
                }}
              />
            </div>
            <div className="buttonsForm">
              <div className="LinksForms">
                <Link to={"/signUp"}>Sign up</Link>
              </div>
              <button type="button" className="btn btn-primary" onClick={()=> handleSubmit()} >
                Send
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
