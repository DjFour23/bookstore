import * as React from "react";
import { useAuth } from "../../Context/authContext";
import { getLibros } from "./../../Firebase/Api/api";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
//import { useChat } from "../Chat/useChat";
//import { auth } from "./../../Firebase/config";
//import swal from "sweetalert";

// User view
export function HomeUser() {
  const { logout, user } = useAuth();

  const navigate = useNavigate();
  // Log out - User
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  const [libros, setLibros] = React.useState([{}]);
  const [librosOriginales, setLibrosOriginales] = React.useState([]);

  // obtener libros
  const getLinks = async () => {
    const querySnapshot = await getLibros();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setLibros(docs);
    setLibrosOriginales(docs);
  };

  // Manejar el estado de los checkboxes
  const [checkboxState, setCheckboxState] = React.useState(
    JSON.parse(localStorage.getItem("checkboxes")) || {}
  );

  const handleCheckboxChange = (event, itemId) => {
    const newState = {
      ...checkboxState,
      [itemId]: event.target.checked,
    };
    setCheckboxState(newState);
    localStorage.setItem("checkboxes", JSON.stringify(newState));
  };

  // cargar los libros
  React.useEffect(() => {
    getLinks();
  }, []);

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    if (searchTerm === "") {
      setLibros(librosOriginales);
    } else {
      const filteredLibros = librosOriginales.filter((libro) =>
        libro.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setLibros(filteredLibros);
    }
  };

  // const handleDisponibilidadChange = async (id, disponibilidad) => {
  //   try {
  //     const docRef = firebase.firestore().collection('libros').doc(id);
  //     await docRef.update({ disponible: disponibilidad });
  //     // Actualizar los libros mostrados en el componente
  //     const updatedLibros = libros.map((libro) => {
  //       if (libro.id === id) {
  //         return { ...libro, disponible: disponibilidad };
  //       } else {
  //         return libro;
  //       }
  //     });
  //     setLibros(updatedLibros);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  const actualizarDisponibilidad = async (id, disponibilidad) => {
    try {
      const docRef = doc(db, "libros", id);
      const updatedLibros = libros.map((libro) => {
        if (libro.id === id) {
          return { ...libro, disponible: disponibilidad };
        } else {
          return libro;
        }
      });

      const updates = { disponible: disponibilidad };
      // console.log(libros., nombre, disponibilidad);
      setLibros(updatedLibros);
      console.log("Disponibilidad actualizada correctamente.");
      return updateDoc(docRef, updates);
    } catch (error) {
      console.error("Error al actualizar la disponibilidad:", error);
    }
  };

  // HTML - User view
  return (
    <>
      <div className="w-full max-w-xs m-auto text-black mb-5">
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-xl mb-4">
            welcome {user.displayName || user.email}
          </p>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-2 mb-5">
            <div className="card rounded-5">
              <br></br>
              <div className="card-body">
                {/* {console.log(user)} */}
                <h5 className="card-title">{user.displayName || user.email}</h5>
                <br></br>
                <a href="/" onClick={handleLogout} className="btn btn-danger">
                  logout
                </a>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/HomeUser/ChatUser")}
                >
                  Chat
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-10">
            <div
              className="
                row 
                g-4 
                overflow-y-scroll 
                border 
                album 
                container
                "
              style={{ minHeight: "49vh", maxHeight: "52vh" }}
            >
              <div className="card-group">
                <div className="col-12 mb-4">
                  <input
                    className=" col-10 border rounded-start-5"
                    type="text"
                    placeholder="Ingrese titulo del libro"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    className=" col-2 border rounded-end-5"
                    onClick={handleSearch}
                  >
                    <i class="fa-solid ">Buscar .</i>
                    <i class="fa-solid fa-magnifying-glass fa-beat"></i>
                  </button>
                </div>
                {libros.map((item, id) => (
                  <>
                    <div className="col-lg-3 col-md-2 col-sm-1 col-xs-1 mb-2 p-2 ">
                      <div className="card shadow-sm mt-4 p-1">
                        <img
                          class="card-img"
                          src={item.caratula}
                          alt="..."
                          style={{ minHeight: "38vh", maxHeight: "40vh" }}
                        />
                        <div class="card-img-overlay">
                          <div
                            className={`card text-center border-info ${
                              item.disponible
                                ? "text-bg-dark"
                                : "text-bg-danger"
                            }`}
                          >
                            <div className="card-body">
                              <p className="card-text lead mb-4 fw-semibold">
                                <h5 class="card-title">{item.nombre}</h5>
                                <label class="fancy-checkbox">
                                  <input
                                    type="checkbox"
                                    checked={
                                      localStorage.getItem(
                                        `${item.nombre}-${id}`
                                      ) === "true"
                                        ? true
                                        : false
                                    }
                                    onChange={(e) => {
                                      localStorage.setItem(
                                        `${item.nombre}-${id}`,
                                        e.target.checked
                                      );
                                      handleCheckboxChange(e, id);
                                    }}
                                  />
                                  <i
                                    class="fa-solid fa-star checked fa-lg"
                                    style={{ color: "#eeff00" }}
                                  ></i>
                                  <i
                                    class="fa-regular fa-star unchecked fa-lg"
                                    style={{ color: "#eeff00" }}
                                  ></i>
                                </label>
                                <button
                                  onClick={() =>
                                    actualizarDisponibilidad(
                                      item.id,
                                      !item.disponible
                                    )
                                  }
                                >
                                  {item.disponible ? "Rentar" : "Devolver"}
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeUser;
