import { useAuth } from "../../Context/authContext";

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

  // HTML - User view
  return (
    <>
      <div className="w-full max-w-xs m-auto text-black">
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-xl mb-4">
            welcome User: {user.displayName || user.email}
          </p>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-10">
            <div
              className="container border album overflow-y-scroll"
              style={{ height: "60vh" }}
            >
              <div class="card-group">
                <div class="col-3">
                  <div class="card shadow-sm mt-4 mh-100 mr-3 ">
                    <img
                      src="..."
                      class="card-img-top rounded-circle"
                      alt="..."
                    />
                    <div class="card-body">
                      <h4 class="card-text">Tittle</h4>
                      <div class="d-flex  ">
                        {/* <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div> */}
                        <small class="text-muted align-self-end">
                          <i
                            class="fa-sharp fa-solid fa-star fa-2xl"
                            style={{ color: "#eeff00" }}
                          ></i>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="container">
              <div class="card rounded-5" style={{ width: 18 + "rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  {console.log(user)}
                  <h5 class="card-title">{user.displayName || user.email}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" onClick={handleLogout} class="btn btn-danger">
                    logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeUser;
