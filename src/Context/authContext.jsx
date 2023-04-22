import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth,db } from "./../Firebase/config";
import { doc, getDoc } from 'firebase/firestore'


const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const role = async(usuario) =>{
    const docRef = doc(db, `usuarios/${usuario.uid}`)
      const query = await getDoc(docRef)
      const role = await query.data().role
      return role
      
  }

  const logout = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        role
      }}
    >
      {children}
    </authContext.Provider>
  );
}