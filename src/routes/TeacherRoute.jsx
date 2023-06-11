import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";


const TeacherRoute = ({ children }) => {
    const { userRole, logOut } = useAuth()

    if (userRole === 'teacher') {
        return children
    }
    logOut()
    return <Navigate to='/login'></Navigate>
};

export default TeacherRoute;