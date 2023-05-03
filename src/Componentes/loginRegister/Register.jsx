import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import swal from "sweetalert";
import "../../index.css";
/* import { CircularProgress } from "@mui/joy"; */

export function Register() {
  // Calling methods in Auth Context
  const { signup, emailValidator } = useAuth();

  // Initializing user states
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    role: "0",
  });
  /* const [loading, setLoading] = useState(false); */
  const navigate = useNavigate();

  // Capturing data in registration form
  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(usuario)
    try {
      if (
        usuario.name === "" &&
        usuario.lastname === "" &&
        usuario.email === "" &&
        usuario.password === ""
      )
        return swal({
          title: "Error",
          text: `Complete the form`,
          icon: "error",
        });
      if (usuario.name === "")
        return swal({
          title: "Error",
          text: `Type your name`,
          icon: "error",
        });

      if (usuario.lastname === "")
        return swal({
          title: "Error",
          text: `Type your last name`,
          icon: "error",
        });
      if (usuario.email === "")
        return swal({
          title: "Error",
          text: `Type your email`,
          icon: "error",
        });
      const response = await emailValidator(usuario.email);
      if (response === false)
        return swal({
          title: "Email already exists",
          text: `Type another email ...`,
          icon: "error",
        });
      if (usuario.password === "")
        return swal({
          title: "Error",
          text: `Type your password`,
          icon: "error",
        });
      if (usuario.password.length < 6)
        return swal({
          title: "Error",
          text: `Your password must have 6 characters`,
          icon: "error",
        });
      if (usuario.role === "0")
        return swal({
          title: "Error",
          text: `Please select a role`,
          icon: "error",
        });
      await signup(
        usuario.name,
        usuario.lastname,
        usuario.email,
        usuario.password,
        usuario.role
      );
      /*  setLoading(true); */
      swal({
        title: "Registration completed",
        text: `Nice, welcome to bookstore!!!`,
        icon: "success",
      });
      navigate("/login");
    } catch (error) {
      swal({
        title: "Registration error",
        text: `Try again`,
        icon: "error",
      });
    }
  };

  // HTML- Registration Form
  return (
    <>
      <main className="contentForm container">
        <h2 style={{ marginBottom: "20px" }}>Sign Up</h2>
        <div className="boxForm">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={({ target }) => {
                  setUsuario((data) => ({ ...data, name: target.value }));
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                name="lastname"
                id="lastName"
                className="form-control"
                onChange={({ target }) => {
                  setUsuario((data) => ({ ...data, lastname: target.value }));
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                onChange={({ target }) => {
                  setUsuario((data) => ({ ...data, email: target.value }));
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
                  setUsuario((data) => ({ ...data, password: target.value }));
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">
                Role
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="role"
                onChange={({ target }) =>
                  setUsuario({ ...usuario, role: target.value })
                }
              >
                <option defaultChecked value="0">
                  Select your role
                </option>
                <option value="1">Admin</option>
                <option value="2">User</option>
              </select>
            </div>
            <div className="buttonsForm">
              <div className="LinksForms">
                <Link to={"/login"}>Sign in</Link>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleSubmit()}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Register;
