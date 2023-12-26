/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firbase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)



    // create user  
    const createUser = (email,password)=>{
        // setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

       // log in with email and password 
       const logIn =( email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signup with email 
    const signUpWithGoogle =()=>{
        // setLoading(true)
       return signInWithPopup(auth, googleProvider)
       
    }
 
    // logOut  
    const logOut =()=>{
        signOut(auth)
    }
    // update profile 
    const updateProfile =(name,photoURL)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    }

    // onAuthStateChanged
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            } else {
              // User is signed out
              // ...
            }
          });
          return ()=>{
            return unSubscribe()
          }
    },[auth, user])
    const authInfo={
        user,
        loading,
        createUser,
        logIn,
        updateProfile,
        logOut,
        signUpWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;