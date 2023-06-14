
import useRole from '../hooks/useRole';
import { useNavigate } from 'react-router';
import Spinner from '../components/Spinner';
import useAuth from '../hooks/useAuth';


const AdminRoute = ({ children }) => {
    const { logOut } = useAuth()
    const { role, roleLoading } = useRole()
    const navigate = useNavigate()

    if (roleLoading) {
        return <Spinner></Spinner>
    }

    if (role === 'admin') {
        return children
    }
    logOut()
    navigate('/login')

};

export default AdminRoute;