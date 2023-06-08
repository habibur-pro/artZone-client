import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide from '../../assets/images/slide-2.jpg'

import MyContainer from "../../components/MyContainer";

const Banner = () => {
    return (
        <div className=" ">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                showIndicators={false}
                showStatus={false}
            >
                <div className="relative max-h-[calc(100vh-50px)]">
                    <img src={slide} className="h-100" />
                    <MyContainer>
                        <div className="text-white   absolute top-0 left-0 w-full bg-black h-full bg-opacity-50 flex justify-center items-center">

                            <p className="white text-4xl font-bold">Something</p>

                        </div>
                    </MyContainer>
                </div>
                <div className="relative max-h-[calc(100vh-50px)]">
                    <img src={slide} className="h-100" />
                    <MyContainer>
                        <div className="text-white   absolute top-0 left-0 w-full bg-black h-full bg-opacity-50 flex justify-center items-center">

                            <p className="white text-4xl font-bold">Something</p>

                        </div>
                    </MyContainer>
                </div>


            </Carousel>


        </div>
    );
};

export default Banner;