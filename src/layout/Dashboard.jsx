import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navbar from "../components/shared/Navbar";


const Dashboard = () => {
    const { user } = useAuth()
    console.log('dashboard user', user)
    return (
        <div>
            <Navbar />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}

                    <Outlet />


                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 h-full bg-secondary text-white">
                        <img className="w-16 h-16 rounded-full" src={user?.photoURL} alt="" />
                        {/* Sidebar content here */}

                        <li><Link to='/dashboard/my_selected_class'>Selected Class</Link></li>
                        <li><Link to='/dashboard/my_enroled_class'>Enroled Class</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;