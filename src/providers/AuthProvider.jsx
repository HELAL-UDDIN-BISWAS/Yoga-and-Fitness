import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.init";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loding, setLoding]=useState(true)
    const provaider=new GoogleAuthProvider()

    const  signupUser = (email, password) => {
     setLoding(true)
     return signInWithEmailAndPassword(auth, email, password)
     

    }

    const createUser = (email, password) => {
        setLoding(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout=()=>{
        signOut(auth)
        .then()
        .catch()
        setLoding(true)
    }
    const googlesignin=()=>{
    signInWithPopup(auth,provaider)
    setLoding(true)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, correntUser => {
            console.log("user is the one state change ", correntUser)
            setuser(correntUser)
            setLoding(false)
            return () => {
                unSubscribe()
            }
        })
    }, [])

    const AuthInfo = {location, loding,user,googlesignin, createUser, signupUser,logout,}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;