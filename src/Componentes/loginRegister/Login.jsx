import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../../Context/authContext";
import { auth } from "./../../Firebase/config";
import swal from 'sweetalert'

export function Login() {

  // Inicializar usuario
  const [usuario, setUser] = useState({
    email: "",
    password: ""
  });

  // Metodos AuthContext
  const { login, role } = useAuth();

  // Inicializar navigate
  const navigate = useNavigate();

  // Formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (usuario.email === "" && usuario.password === "") return swal({
        title: "Error",
        text: `Complete the form`,
        icon: "error"
      });
      if (usuario.email === "") return swal({
        title: "Error",
        text: `Type an email`,
        icon: "error"
      });
      if (usuario.password === "") return swal({
        title: "Error",
        text: `Type a password`,
        icon: "error"
      });
      // Login (firebase)
      await login(usuario.email, usuario.password);
      const user = auth.currentUser;
      // Query user's rol
      // admin 1
      // user 2
      const rol = await role(user)
      rol === 1 ? navigate("/HomeAdmin") : navigate("/HomeUser");

  } catch (error) {
    swal({
      title: "Authentication Error",
      text: `Oops`,
      icon: "error"
    });
  }
};

// Configurar usuario y capturar los datos en formulario
const handleChange = ({ target: { value, name } }) =>
  setUser({ ...usuario, [name]: value });



// HTML Formulario login
return (
  <div className="container-fluid">
    <div className="card mt-2 mb-2">
      <h5 className="card-title text-center mt-3">Login</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" for="form2Example1">
              Email address
            </label>
            <input type="email" name="email" id="email" onChange={handleChange} className="form-control" placeholder="example@domain.com" />
          </div>
          <div className="mb-3">
            <label className="form-label" for="form2Example2">
              Password
            </label>
            <input type="password" name="password" id="password" onChange={handleChange} className="form-control" placeholder="*************" />
          </div>
          <div className="mt-3 mb-3">
            <button type="submit" className="btn btn-success">Sign in</button>
          </div>
          <div className="text-center">
            Not a member? <Link to="/signUp">Register</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}

export default Login;
