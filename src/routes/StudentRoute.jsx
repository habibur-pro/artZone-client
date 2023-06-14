
import useRole from '../hooks/useRole';
import { useNavigate } from 'react-router';
import Spinner from '../components/Spinner';
import useAuth from '../hooks/useAuth';


const StudentRoute = ({ children }) => {
    const { logOut } = useAuth()
    const { role, roleLoading } = useRole()
    const navigate = useNavigate()

    if (roleLoading) {
        return <Spinner></Spinner>
    }

    if (role === 'student') {
        return children
    }
    logOut()
    navigate('/login')

};

export default StudentRoute;