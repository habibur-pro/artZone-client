import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide from '../../assets/images/slider.jpg'

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
                        <div className="text-white  text-5xl absolute top-0 w-full bg-black left-0 h-full bg-opacity-50">
                            <p className="z-10">Legend</p>
                        </div>
                    </MyContainer>
                </div>
                <div className="relative max-h-[calc(100vh-50px)]">
                    <img src={slide} className="h-100" />
                    <MyContainer>
                        <div className="text-white  text-5xl absolute top-0 w-full bg-black left-0 h-full bg-opacity-50">
                            <p className="z-10">Legend</p>
                        </div>
                    </MyContainer>
                </div>


            </Carousel>


        </div>
    );
};

export default Banner;