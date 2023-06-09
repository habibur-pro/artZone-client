import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { MoonLoader } from "react-spinners";


const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)

    {
        isLoading && <span><MoonLoader color="#36d7b7" /></span>
    }

    // email password register 
    const registerWithEmailPassword = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // email password login 
    const logInWithEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login 

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // updata profile 
    const updateUserProfile = (userName, userImage) => {
        // setLoading(true)
        console.log('update info', userName, userImage)
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: userImage
        })
    }




    const userInfo = {
        user,
        setUser,
        registerWithEmailPassword,
        logInWithEmailPassword,
        loginWithGoogle,
        updateUserProfile,
        logOut,
        isLoading,
        setLoading
    }


    // user state observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },)




    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;