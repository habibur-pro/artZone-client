import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";



const StudentRoute = ({ children }) => {
    const { userRole, logOut } = useAuth()

    if (userRole === 'student') {
        return children
    }
    logOut()
    return <Navigate to='/login'></Navigate>
};

export default StudentRoute;