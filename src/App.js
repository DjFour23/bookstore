import { Routes, Route } from "react-router-dom"
import Login from './Componentes/loginRegister/Login';
import Landing from './Componentes/landingPage/landing';
import Register from "./Componentes/loginRegister/Register";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="/signUp" element={ <Register/> } />
        <Route path="contact" element={ <Login/> } />
      </Routes>
    </div>
  )
}

export default App
