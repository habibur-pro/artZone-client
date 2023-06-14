import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyContainer from "../MyContainer";



const Footer = () => {

    return (
        <div className="bg-secondary text-white ">
            <MyContainer>
                <footer className="footer p-10 ">
                    <div>
                        <h2 className="text-5xl font-bold">Art<span className="text-primary">Zone</span></h2>
                        <p>ArtZone Academy Ltd.<br />Providing Best Leaning Since 2010</p>
                        <p>Dhaka-1200 Bangladesh</p>
                        <div className='flex items-center justify-center gap-3 mt-3'>
                            <span className=' p-1 bg-primary text-white text-lg hover:scale-110'><AiOutlineMail /></span>
                            <span className=' p-1 bg-primary text-white text-lg hover:scale-110'><FaLinkedinIn /></span>
                            <span className=' p-1 bg-primary text-white text-lg hover:scale-110'><AiOutlineWhatsApp /></span>
                            <span className=' p-1 bg-primary text-white text-lg hover:scale-110'><CiFacebook /></span>
                        </div>
                    </div>
                    <div>
                        <span className="footer-title text-white underline">Services</span>
                        <Link className="link link-hover">Sketch Art</Link>
                        <Link className="link link-hover">Digital Art</Link>
                        <Link className="link link-hover">3D Art</Link>
                        <Link className="link link-hover">Painting</Link>
                    </div>
                    <div>
                        <span className="footer-title">Quick Links</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Classes</Link>
                        <Link className="link link-hover">Teachers</Link>
                    </div>
                    <div>
                        <span className="footer-title">Usefull Links</span>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Desclimer</Link>
                        <Link className="link link-hover">Support</Link>

                    </div>

                </footer>

                <div className="text-center py-5">
                    <p>Copyright © 2023 - All right reserved by ArtZone Academy Ltd</p>
                </div>
            </MyContainer>
        </div>
    );
};

export default Footer;