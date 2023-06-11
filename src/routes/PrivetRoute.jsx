import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth'
import Spinner from '../components/Spinner';


const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useAuth()
    const location = useLocation()

    if (isLoading) {
        return <div className='h-screen flex justify-center items-center '><Spinner /></div>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate >

};

export default PrivetRoute;