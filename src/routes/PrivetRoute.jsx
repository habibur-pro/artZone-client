import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth'

const PrivetRoute = ({ children }) => {
    const { user } = useAuth()
    const location = useLocation()

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate >

};

export default PrivetRoute;