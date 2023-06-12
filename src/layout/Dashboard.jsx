import { Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import Hamburger from "hamburger-react";
import SideMenu from "../components/SideMenu";
import profileImage from '../assets/images/profile.jpg'



const Dashboard = () => {
    const { user, userRole } = useAuth()

    const [open, setOpen] = useState(false)
    console.log('dashboard user', user)
    return (
        <>
            {/* left side  */}
            <div className="flex max-w-[1900px] mx-auto">
                <div className={`${open ? 'left-0' : '-left-[100%]'} md:left-0 absolute md:relative  duration-300 h-auto min-h-screen bg-secondary w-60 md:w-80 z-10  text-white`}>
                    <div className="text-center border-b border-dashed pb-3 border-slate-300">
                        <div>
                            {
                                user && <img className="w-28 h-28 rounded-full mx-auto mt-10 shadow" src={user?.photoURL && user?.photoURL ? user?.photoURL : profileImage} alt="" />
                            }
                        </div>
                        <h3 className="text-2xl  font-bold mt-3">{user?.displayName}</h3>
                        <p className=" mt-3">{user?.email}</p>
                        {
                            userRole && userRole === 'student' || <h3 className="mt-3"><span className="bg-slate-500 px-3 rounded-full py-1 ">{userRole}</span></h3>
                        }

                    </div>

                    <div className="mt-5">
                        <SideMenu></SideMenu>
                    </div>
                    {/* <ul className="text-white px-3">
                        <li>Habibur</li>
                    </ul> */}
                </div>


                {/* right side  */}
                <div className=" w-full relative bg-base-200  px-5 md:px-10">
                    <div onClick={() => setOpen(!open)} className='md:hidden absolute top-0 right-0 p-3'>
                        <Hamburger hideOutline={false} />
                    </div>
                    <div className="mt-10 border p-3">
                        <Outlet />
                    </div>
                </div>

            </div>


            {/* <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    Page content here

                    <Outlet />


                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-60 h-full bg-secondary text-white">
                        <img className="w-16 h-16 rounded-full" src={user?.photoURL} alt="" />
                        Sidebar content here

                        <li><Link to='/dashboard/my_selected_class'>Selected Class</Link></li>
                        <li><Link to='/dashboard/my_enroled_class'>Enroled Class</Link></li>
                    </ul>

                </div>
            </div> */}
        </>
    );
};

export default Dashboard;