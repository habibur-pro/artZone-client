import experienceBg from '../../assets/images/experience-bg.jpg'
import MyContainer from '../../components/MyContainer'
import ProgressBar from "@ramonak/react-progress-bar";
const ExperienceBoard = () => {
    return (
        <div className="h-[550px] bg-cover bg-center bg-no-repeat my-32" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${experienceBg})` }}>

            <div className='flex justify-between w-full h-full'>
                <div className='md:w-1/2 bg-secondary h-[550px] bg-opacity-90 pt-12'>
                    <MyContainer>
                        <div className='text-white'>
                            <h3 className='text-4xl font-bold'>
                                13 Years Of Experience In Art & Drawing
                            </h3>
                            <p className='mt-4'>13 years of art and drawing expertise. Exceptional creativity and skilled craftsmanship. Trusted provider of quality artwork.</p>
                        </div>

                        <div className='my-5'>
                            <p className='text-white font-bold'>Drawing</p>
                            <ProgressBar
                                completed={89}
                                bgColor="#ce373a"
                                labelAlignment="outside"
                                baseBgColor="#fff"
                                labelColor="#fff"
                                maxCompleted={100}
                                transitionDuration="1000"
                                margin='10'
                                padding='1'
                                height='10px'
                            />
                        </div>
                        <div className='my-5'>
                            <p className='text-white font-bold'>Painting</p>
                            <ProgressBar
                                completed={95}
                                bgColor="#ce373a"
                                labelAlignment="outside"
                                baseBgColor="#fff"
                                labelColor="#fff"
                                maxCompleted={100}
                                transitionDuration="1000"
                                margin='10'
                                padding='1'
                                height='10px'
                            />
                        </div>
                        <div className='my-5'>
                            <p className='text-white font-bold'>Sketch</p>
                            <ProgressBar
                                completed={80}
                                bgColor="#ce373a"
                                labelAlignment="outside"
                                baseBgColor="#fff"
                                labelColor="#fff"
                                maxCompleted={100}
                                transitionDuration="1000"
                                margin='10'
                                padding='1'
                                height='10px'
                            />
                        </div>
                        <div className='my-5'>
                            <p className='text-white font-bold'>Digital Art</p>
                            <ProgressBar
                                completed={85}
                                bgColor="#ce373a"
                                labelAlignment="outside"
                                baseBgColor="#fff"
                                labelColor="#fff"
                                maxCompleted={100}
                                transitionDuration="1000"
                                margin='10'
                                padding='1'
                                height='10px'
                            />
                        </div>

                    </MyContainer>
                </div>
            </div>


        </div>
    );
};

export default ExperienceBoard;