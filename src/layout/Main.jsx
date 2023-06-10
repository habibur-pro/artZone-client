import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";



const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;