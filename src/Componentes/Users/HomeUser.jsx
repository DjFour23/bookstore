import { useAuth } from "../../Context/authContext";
import * as React from "react";
import { getLibros, mensaje } from "./../../Firebase/Api/api";
import { useState } from "react";
import { useChat } from "../Chat/useChat";
import { auth } from "./../../Firebase/config";
import swal from "sweetalert";

// User view
export function HomeUser() {
  const { logout, user } = useAuth();
  const [message, setMessage] = useState("");
  const { chat } = useChat();

  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      const user = auth.currentUser;
      mensaje(message, user.uid, user)
      swal({
        title: "OK",
        text: `mensaje enviado`,
        icon: "succes",
      });
    } catch (error) {
      swal({
        title: "Error",
        text: `Try again`,
        icon: "error",
      });
    }



  }


  // Log out - User
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
    /*  console.log(docs); */
  };

  // cargar los libros
  React.useEffect(() => {
    getLinks();
  }, []);

  // const [searchResults, setSearchResults] = React.useState([]);
  // const [searchTerm, setSearchTerm] = React.useState("");

  // const handleSearch = () => {
  //   // Aquí implementa la lógica de búsqueda
  //   const results = [
  //     /* Resultados de búsqueda */
  //   ];
  //   setSearchResults(results);
  // };

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
            </div>
          </div>
          {/* <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {searchResults.map((result) => (
          <li>{alert(result)}</li>
        ))}
      </ul> */}
          <div className="col-sm-12 col-md-8 col-lg-10">
            <div
              className="
                row 
                g-4 
                overflow-y-scroll 
                border 
                album 
                container
                h-25 
                "
            >
              <div className="card-group">
                {libros.map((item, id) => (
                  <>
                    <div
                      className="col-lg-3 col-md-2 col-sm-1 col-xs-1 mb-2 p-2 " /* key={item.id} */
                    >
                      <div className="card shadow-sm mt-4 p-1">
                        <img
                          className="card-img"
                          src={item.caratula}
                          alt="..."
                        />
                        <div className="card-img-overlay">
                          <div className="card text-center  border-info  text-bg-dark ">
                            <div className="card-body">
                              <div className="card-text lead mb-4 fw-semibold">
                                <h5 className="card-title">{item.nombre}</h5>
                                <label className="fancy-checkbox">
                                  <input type="checkbox" />
                                  <i
                                    className="fa-solid fa-star checked fa-lg"
                                    style={{ color: "#eeff00" }}
                                  ></i>
                                  <i
                                    className="fa-regular fa-star unchecked fa-lg"
                                    style={{ color: "#eeff00" }}
                                  ></i>
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* <p class="card-text">
                        {item.descripcion}
                      </p> */}
                          {/* <small class="text-muted align-self-end">
                        <i
                        class="fa-sharp fa-solid fa-star fa-2xl"
                          style={{ color: "#eeff00" }}
                          ></i>
                        </small> */}
                        </div>
                        <div className="card-footer">
                          <small>
                            {item.disponible ? (
                              <span className="badge text-bg-success">
                                Prestar
                              </span>
                            ) : (
                              <span className="badge text-bg-danger">
                                Prestado :c
                              </span>
                            )}
                          </small>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>


            <div className="costado">
              <form>
                <input type="text" value={message} placeholder="Escribir Mensaje" onChange={(e) => setMessage(e.target.value)} />
                <button type="submit" onClick={sendMessage}>Enviar</button>
              </form>
              <ul>
                {chat.map(m => <p key={m.id}>{m.message}</p>)}
              </ul>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
export default HomeUser;
