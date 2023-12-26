/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firbase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)



    // create user  
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // signup with email 
    const signUpWithGoogle =()=>{
        signInWithPopup(auth, googleProvider)
    }
    const authInfo={
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;