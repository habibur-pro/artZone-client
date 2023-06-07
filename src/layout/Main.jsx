import { Outlet } from "react-router";



const Main = () => {
    return (
        <>
            <div>
                <h3 className="text-3xl text-center">Main</h3>
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default Main;