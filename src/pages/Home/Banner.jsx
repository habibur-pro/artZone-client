import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide from '../../assets/images/slideImage-2.jpg'

import MyContainer from "../../components/MyContainer";

const Banner = () => {
    return (
        <div className="pt-16">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                showIndicators={false}
                showStatus={false}
            >
                {/* slide 1  */}
                <div className="relative max-h-[calc(100vh-50px) ]">
                    <img src={slide} className="h-100" />
                    <MyContainer>
                        <div className="text-white   absolute top-0 left-0 w-full bg-secondary h-full bg-opacity-80 flex justify-center items-center">

                            <div>
                                <h1 className="white text-4xl font-bold md:w-3/4 mx-auto">The Most Creative Art School That Can Develop Your Talent</h1>
                                <button className="btn btn-primary mt-5">get started </button>
                            </div>

                        </div>
                    </MyContainer>
                </div>

                {/* slide 2  */}
                <div className="relative max-h-[calc(100vh-50px)]">
                    <img src={slide} className="h-100" />
                    <MyContainer>
                        <div className="text-white   absolute top-0 left-0 w-full bg-secondary h-full bg-opacity-80 flex justify-center items-center">

                            <div>
                                <p className="white text-4xl font-bold md:w-3/4 mx-auto">The Most Creative Art School That Can Develop Your Talent</p>
                                <button className="btn btn-primary mt-5">get started </button>
                            </div>

                        </div>
                    </MyContainer>
                </div>
                {/* slide 3 */}
                <div className="relative max-h-[calc(100vh-50px)]">
                    <img src={slide} className="h-100" />
                    <MyContainer>
                        <div className="text-white   absolute top-0 left-0 w-full bg-secondary h-full bg-opacity-80 flex justify-center items-center">

                            <div>
                                <p className="white text-4xl font-bold md:w-3/4 mx-auto">The Most Creative Art School That Can Develop Your Talent</p>
                                <button className="btn btn-primary mt-5">get started </button>
                            </div>

                        </div>
                    </MyContainer>
                </div>



            </Carousel>


        </div>
    );
};

export default Banner;