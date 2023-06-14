import { Fade } from 'react-awesome-reveal';
import headerImage from '../assets/images/slideImage.jpg'
import MyContainer from './MyContainer';

const PageHeader = ({ heading }) => {
    return (
        <div className='pt-16'>
            <div className="h-[300px]  flex justify-center items-center bg-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `linear-gradient(rgba(45, 52, 71, 0.8), rgba(45, 52, 71, 0.8)), url(${headerImage})` }}>
                <MyContainer>
                    {/* <div className='flex justify-center items-center'> */}
                    <div>
                        <Fade cascade damping={0.1} className="text-white text-4xl font-bold text-center">
                            {heading}
                        </Fade>

                    </div>
                    {/* </div> */}
                </MyContainer>
            </div>
        </div>
    );
};

export default PageHeader;