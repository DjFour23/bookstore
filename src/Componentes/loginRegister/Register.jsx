import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import swal from 'sweetalert'




export function Register() {

  // Calling methods in Auth Context
  const { signup, emailValidator } = useAuth();

  // Initializing user states
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    role: "0"
  });

  const navigate = useNavigate();

  // Capturing data in registration form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (usuario.name === "" && usuario.lastname === "" && usuario.email === "" && usuario.password === "") return swal({
        title: "Error",
        text: `Complete the form`,
        icon: "error"
      });
      if (usuario.name === "") return swal({
        title: "Error",
        text: `Type your name`,
        icon: "error"
      });

      if (usuario.lastname === "") return swal({
        title: "Error",
        text: `Type your last name`,
        icon: "error"
      });
      if (usuario.email === "") return swal({
        title: "Error",
        text: `Type your email`,
        icon: "error"
      });
      const response = await emailValidator(usuario.email)
      if (response === false) return swal({
        title: "Email already exists",
        text: `Type another email ...`,
        icon: "error"
      });
      if (usuario.password === "") return swal({
        title: "Error",
        text: `Type your password`,
        icon: "error"
      });
      if (usuario.password.length < 6) return swal({
        title: "Error",
        text: `Your password must have 6 characters`,
        icon: "error"
      });
      if (usuario.role === "0") return swal({
        title: "Error",
        text: `Please select a role`,
        icon: "error"
      });
      await signup(usuario.name, usuario.lastname, usuario.email, usuario.password, usuario.role);
      swal({
        title: "Registration completed",
        text: `Nice, welcome to bookstore!!!`,
        icon: "success"
      });
      navigate("/about")
    } catch (error) {
      swal({
        title: "Registration error",
        text: `Try again`,
        icon: "error"
      });
    }
  };

  // HTML- Registration Form
  return (
    <div className="container-fluid">
      <div className="card mt-3 mb-3">
        <h5 className="card-title text-center mt-3">Sign up</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-0">
              <label className="form-label" for="name">
                Name
              </label>
              <input type="text" name="name" id="name" onChange={(e) => setUsuario({ ...usuario, name: e.target.value })} className="form-control" placeholder="Example: Pepito" />
            </div>
            <div className="mb-0">
              <label className="form-label" for="lastname">
                Last Name
              </label>
              <input type="text" name="lastname" id="lastname" onChange={(e) => setUsuario({ ...usuario, lastname: e.target.value })} className="form-control" placeholder="Example: Perez" />
            </div>
            <div className="mb-0">
              <label className="form-label" for="email">
                Email address
              </label>
              <input type="email" name="email" id="email" onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} className="form-control" placeholder="example@domain.com" />
            </div>
            <div className="mb-0">
              <label className="form-label" for="password">
                Password
              </label>
              <input type="password" name="password" id="password" onChange={(e) => setUsuario({ ...usuario, password: e.target.value })} className="form-control" placeholder="*************" />
            </div>
            <div className=" mb-0">
              <label class="form-label" for="role">Role</label>
              <select class="form-select" aria-label="Default select example" id="role" onChange={(e) => setUsuario({ ...usuario, role: e.target.value })}>
                <option defaultChecked value="0">Select your role</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
              </select>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-success">Sign in</button>
            </div>
            <div className="text-center">
              Already have an Account? <Link to="/about">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
