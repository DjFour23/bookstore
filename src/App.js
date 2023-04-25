import { Routes, Route } from "react-router-dom"
import Login from './Componentes/loginRegister/Login';
import Landing from './Componentes/landingPage/landing';
import Register from "./Componentes/loginRegister/Register";
import { AuthProvider } from "./Context/authContext";
import  HomeAdmin from "./Componentes/Admin/HomeAdmin";
import  HomeUser from "./Componentes/Users/HomeUser";
import	{ProtectedRoute} from './Componentes/utils/ProtectedRoute'

import "./App.css"
function App() {
  return (
  
      <AuthProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="signUp" element={ <Register/> } /> 
        <Route path="HomeAdmin" element={<ProtectedRoute><HomeAdmin/></ProtectedRoute> } />
        <Route path="HomeUser" element={<ProtectedRoute><HomeUser/></ProtectedRoute> } />
    </Routes>
    </div>
    </AuthProvider>
    
  )
}

export default App
