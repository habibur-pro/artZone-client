import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { userRole, logOut } = useAuth()
    if (userRole === "admin") {
        return children
    }
    logOut()
    return <Navigate to='/login'></Navigate>



};

export default AdminRoute;