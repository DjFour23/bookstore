import React from 'react'

function Libros() {
  return (
    <div className="Container2">
        <div className="card2">
        <form>
        <h2 id="Titulo">Books</h2>
          <input
            type="text"
            className="text"
            placeholder="Add book"
            />
          <input 
            type="text"
            className="text"
            placeholder="Add description"
            />
          <button id="add">
            Save
          </button>
        </form>
        </div>
      </div>
  )
}

export default Libros