import { Link } from 'react-router-dom';
import erorroImae from '../assets/images/errorEmage.jpg'

const ErrorPage = () => {
    return (

        <div className="h-screen w-screen flex justify-center items-center relative">
            <img className='h-full w-full' src={erorroImae} alt="" />
            <Link>
                <button className="btn btn-secondary absolute top-1/2 left-1/2">Go To Home</button>
            </Link>
        </div>

    );
};

export default ErrorPage;