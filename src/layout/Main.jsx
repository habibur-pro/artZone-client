import { Outlet } from "react-router";
import Navbar from "../components/Navbar";



const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Main;