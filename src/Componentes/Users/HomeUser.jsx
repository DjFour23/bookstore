import { useAuth } from "../../Context/authContext";
import * as React from "react";
import { getLibros } from "./../../Firebase/Api/api";

// User view
export function HomeUser() {
  const { logout, user } = useAuth();

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
  };

  // cargar los libros
  React.useEffect(() => {
    getLinks();
  }, []);

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
            <div class="card rounded-5">
              <br></br>
              <div class="card-body">
                {/* {console.log(user)} */}
                <h5 class="card-title">{user.displayName || user.email}</h5>
                <br></br>
                <a href="/" onClick={handleLogout} class="btn btn-danger">
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
              <div class="card-group">
                {libros.map((item, id) => (
                  <>
                    {item.disponible ? (
                      <div className="col-lg-3 col-md-2 col-sm-1 col-xs-1 mb-2 p-2 ">
                        <div className="card shadow-sm mt-4 p-1">
                          <img class="card-img" src={item.caratula} alt="..." />
                          <div class="card-img-overlay">
                            <div className="card text-center  border-info  text-bg-dark ">
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
                                        handleCheckboxChange(e, id)
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
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="card-footer">
                            <small>
                              <span class="badge text-bg-success">Prestar</span>
                            </small>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
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
