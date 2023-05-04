import { useAuth } from "../../Context/authContext";
import * as React from "react";
import { getLibros, deleteLibro } from "./../../Firebase/Api/api";
import swal from "sweetalert";
import "./HomeAdmin.css";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// Admin view
export function HomeAdmin() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  // Log out - Admin
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  const [libros, setLibros] = React.useState([{}]);
  // obtener libros
  const getLinks = async () => {
    const querySnapshot = await getLibros();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setLibros(docs);
  };
  // Eliminar un libro
  const onDelete = async (id) => {
    try {
      await deleteLibro(id);
      getLinks();
      swal({
        title: "Libro eliminado",
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Error",
        text: `Try again`,
        icon: "error",
      });
    }
  };

  // cargar los libros
  React.useEffect(() => {
    getLinks();
  }, []);



  // HTML - Admin view
  return (
    <>
      <main className="container contentHomeAdmin">
        <header className="HeaderAdmin">
          <h2 style={{ margin: "0", maxWidth: "300px" }}>
            Welcome Admin:{" "}
            <span style={{ fontSize: "18px" }}>{user.email}</span>{" "}
          </h2>
          <button className="btn btn-secondary" onClick={() => handleLogout()}>
            Logout
          </button>
        </header>
        <div className="LibrosAdmin">
          <div className="contentCardsLibros">
            <article
              className="LibroAdmin NewLibroAdmin"
              onClick={() => navigate("/HomeAdmin/NewLibro")}
            >
              <h1 style={{ fontSize: "100px", opacity: ".5" }}>+</h1>
            </article>
            {libros.map((item, id) => (
              <article
                className="LibroAdmin"
                key={id}
                style={{
                  backgroundImage: `url(${item.caratula})`,
                  backgroundSize: "cover",
                }}
              >
                <h2 style={{ color: "#000", fontWeight: "600" }}>
                  {item.nombre}
                </h2>
                <div className="ActionsLibros">
                  <button className="btn btn-warning" 
                  onClick={() => navigate(`UpdateLibro/${item.id}`)}>
                    <FaEdit fontSize={"25px"} />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(item.id);
                    }}
                  >
                    <MdDelete fontSize={"29px"} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
export default HomeAdmin;
