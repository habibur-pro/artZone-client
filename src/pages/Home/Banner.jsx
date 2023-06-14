import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../assets/images/slide-1.jpg'
import slide2 from '../../assets/images/slide-2.jpg'
import slide3 from '../../assets/images/slide-3.jpg'

import MyContainer from "../../components/MyContainer";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-16">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                showIndicators={false}
                showStatus={false}
            >
                {/* slide 1  */}
                <div className="relative max-h-[calc(100vh-35px) ] ">
                    <img src={slide1} className=" max-h-[calc(100vh-35px)]" />
                    <MyContainer>
                        <div className="text-white   absolute top-0 left-0 w-full bg-secondary h-full bg-opacity-80 flex justify-center items-center">

                            <div>
                                <h1 className="white md:leading-[50px] text-3xl md:text-4xl font-bold md:w-3/4 mx-auto">The Most Creative Art School That Can Develop Your Talent</h1>
                                <Link to='/classes'>
                                    <button className="btn btn-primary mt-5">get started </button>
                                </Link>
                            </div>

                        </div>
                    </MyContainer>
                </div>

                {/* slide 2  */}
                <div className="relative max-h-[calc(100vh-35px)]">
                    <img src={slide2} className="max-h-[calc(100vh-35px)]" />
                    <MyContainer>
                        <div className="text-white   absolute top-0 left-0 w-full bg-secondary h-full bg-opacity-80 flex justify-center items-center">

                            <div>
                                <h1 className="white md:leading-[50px] text-3xl md:text-4xl font-bold md:w-3/4 mx-auto">The Innovative Art School for Creative Development</h1>
                                <Link to='/classes'>
                                    <button className="btn btn-primary mt-5">get started </button>
                                </Link>
                            </div>

                        </div>
                    </MyContainer>
                </div>
                {/* slide 3 */}
                <div className="relative max-h-[calc(100vh-35px)]">
                    <img src={slide3} className="max-h-[calc(100vh-35px)]" />
                    <MyContainer>
                        <div className="text-white   absolute top-0 left-0 w-full bg-secondary h-full bg-opacity-80 flex justify-center items-center">

                            <div>
                                <h1 className="white text-3xl md:text-4xl font-bold md:w-3/4 mx-auto md:leading-[50px]">The Trailblazing Art School for Limitless Creative Development</h1>
                                <Link to='/classes'>
                                    <button className="btn btn-primary mt-5">get started </button>
                                </Link>
                            </div>

                        </div>
                    </MyContainer>
                </div>



            </Carousel>


        </div>
    );
};

export default Banner;