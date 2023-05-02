import React from "react";
import { useNavigate } from "react-router-dom";

function Libros() {
  const navigate = useNavigate();

  return (
    <div className="Container2">
      <div className="card2">
        <form>
          <h2 id="Titulo">Books</h2>
          <input type="text" className="text" placeholder="Add book" />
          <input type="text" className="text" placeholder="Add description" />
          <button id="add">Save</button>
          <div>
            <button
              className="back"
              onClick={() => {
                navigate("/HomeAdmin");
              }}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Libros;
