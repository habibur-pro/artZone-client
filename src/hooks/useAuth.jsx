import { useContext } from "react";
import { AuthContext } from "../routes/AuthProvider";


const useAuth = () => {
    const {
        user,
        setUser,
        registerWithEmailPassword,
        logInWithEmailPassword,
        loginWithGoogle,
        updateUserProfile,
        logOut,
        isLoading,
        setLoading
    } = useContext(AuthContext)
    return {
        user,
        setUser,
        registerWithEmailPassword,
        logInWithEmailPassword,
        loginWithGoogle,
        updateUserProfile,
        logOut,
        isLoading,
        setLoading,
    }
};

export default useAuth;