import { Routes, Route } from "react-router-dom"
import Login from './Componentes/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="about" element={ <Login/> } />
        <Route path="contact" element={ <Login/> } />
      </Routes>
    </div>
  )
}

export default App
