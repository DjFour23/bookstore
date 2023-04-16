import { Routes, Route } from "react-router-dom"
import Login from './Componentes/loginRegister/Login';
import Landing from './Componentes/landingPage/landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="about" element={ <Login/> } />
        <Route path="contact" element={ <Login/> } />
      </Routes>
    </div>
  )
}

export default App
