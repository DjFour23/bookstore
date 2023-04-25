import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "./../Firebase/config";
import { doc, getDoc, setDoc, query, where, collection, getDocs } from 'firebase/firestore'


const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

// Application authentication provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // firebase's register
  const signup = async (name, lastname, email, password, role) => {
    const info_usuario = await createUserWithEmailAndPassword(auth, email, password).then((newUser) => {
      return newUser
    });
    // search an user by his uid
    const docRef = doc(db, `usuarios/${info_usuario.user.uid}`)
    // Creating a firebase's document with the user's information
    await setDoc(docRef, { name: name, lastname: lastname, email: email, password: password, role: parseInt(role) })
  };

  // firebase's login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Query: User's role
  const role = async (usuario) => {
    const docRef = doc(db, `usuarios/${usuario.uid}`)
    const query = await getDoc(docRef)
    const role = await query.data().role
    return role

  }
  // Query: is That email exist?
  const emailValidator = async (email) => {
    const docRef = collection(db, `usuarios`)
    const q = query(docRef, where("email", "==", `${email}`))
    const isEmpty = (await getDocs(q)).empty;
    return isEmpty
  }

  // Firebase's sign Out
  const logout = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error.message)
    }
  }

  // User session
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
        role,
        emailValidator
      }}
    >
      {children}
    </authContext.Provider>
  );
}