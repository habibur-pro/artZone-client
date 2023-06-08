import { useContext } from "react";
import { AuthContext } from "../routes/AuthProvider";


const useAuth = () => {
    const { user,
        registerWithEmailPassword,
        logInWithEmailPassword,
        loginWithGoogle,
        updateUserProfile,
        logOut,
        isLoading,
    } = useContext(AuthContext)
    return {
        user,
        registerWithEmailPassword,
        logInWithEmailPassword,
        loginWithGoogle,
        updateUserProfile,
        logOut,
        isLoading,
    }
};

export default useAuth;