
import useRole from '../hooks/useRole';
import { useNavigate } from 'react-router';
import Spinner from '../components/Spinner';
import useAuth from '../hooks/useAuth';


const TeacherRoute = ({ children }) => {
    const { logOut } = useAuth()
    const { role, roleLoading } = useRole()
    const navigate = useNavigate()

    if (roleLoading) {
        return <Spinner></Spinner>
    }

    if (role === 'teacher') {
        return children
    }
    logOut()
    navigate('/login')

};

export default TeacherRoute;