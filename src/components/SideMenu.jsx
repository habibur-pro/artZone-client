
import { FiShoppingCart } from 'react-icons/fi';
import { BsBuildingGear, BsCartCheck } from 'react-icons/bs';
import { SiGoogleclassroom } from 'react-icons/si';
import { FaUsersCog } from "react-icons/fa";

import { BsWallet2 } from "react-icons/bs";
import { MdOutlineLibraryBooks, MdOutlinePostAdd } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { GiTeacher } from 'react-icons/gi';
import { HiOutlineLogout } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Fade } from 'react-awesome-reveal';


const SideMenu = () => {
    const { userRole, logOut } = useAuth()


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log(logOut)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <ul className='dashboard-links'>
                {
                    userRole === 'student' && <>
                        <Fade>
                            <li className='mb-3'>
                                <NavLink to='/dashboard/my_selected_class'
                                    className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}
                                >
                                    <span className='text-lg'><FiShoppingCart /></span> Selected Classes
                                </NavLink>
                            </li>


                            <li className='mb-3'>
                                <NavLink to='/dashboard/my_enroled_class'
                                    className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}
                                >
                                    <span className='text-lg'><BsCartCheck /></span> Enroled Classes
                                </NavLink>
                            </li>

                            <li className='mb-3'>
                                <NavLink to='/dashboard/payment_history'
                                    className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}
                                >
                                    <span className='text-lg'><BsWallet2 /></span> Payment History
                                </NavLink>
                            </li>
                        </Fade>
                    </>

                }

                {/* teacher route  */}
                {
                    userRole === 'teacher' && <>
                        <Fade>
                            <li className='mb-3'>
                                <NavLink to='/dashboard/add_a_class'
                                    className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}
                                >
                                    <span className='text-2xl text-white'><MdOutlinePostAdd /></span> Add A Class
                                </NavLink>
                            </li>


                            <li className='mb-3'>
                                <NavLink to='/dashboard/my_classes'
                                    className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}
                                >
                                    <span className='text-lg'><SiGoogleclassroom /></span> My Classes
                                </NavLink>
                            </li>
                        </Fade>
                    </>

                }


                {/* admin route  */}
                {
                    userRole === 'admin' && <>
                        <Fade>
                            <li className='mb-3'>
                                <NavLink to='/dashboard/manage_classes'
                                    className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}
                                >
                                    <span className='text-lg text-white'><BsBuildingGear /></span> Manage Classes
                                </NavLink>
                            </li>


                            <li className='mb-3'>
                                <NavLink to='/dashboard/manage_students'
                                    className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}
                                >
                                    <span className='text-lg'><FaUsersCog /></span> Manage Sudents
                                </NavLink>
                            </li>
                        </Fade>
                    </>

                }

                {/* conmmon routes  */}

                <div className='border-b mt-10 border-dashed mb-3'> </div>

                <>
                    <Fade>
                        <li className='mb-3'>
                            <NavLink to='/'
                                className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}
                            >
                                <span className='text-lg text-white'><AiOutlineHome /></span>Home
                            </NavLink>
                        </li>


                        <li className='mb-3'>
                            <NavLink to='/classes'
                                className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}
                            >
                                <span className='text-lg'><MdOutlineLibraryBooks /></span> Classes
                            </NavLink>
                        </li>
                        <li className='mb-3'>
                            <NavLink to='/teachers'
                                className={({ isActive }) => isActive ? 'dashboard_link_active' : 'dashboard_link_default'}
                            >
                                <span className='text-lg'><GiTeacher /></span> Teachers
                            </NavLink>
                        </li>

                        {/* logOut button  */}
                        <li className='mb-3'>

                            <label onClick={handleLogOut} className='dashboard_link_default'> <span className='text-lg'><HiOutlineLogout /></span> LogOut</label>

                        </li>
                    </Fade>
                </>



            </ul>
        </div >
    );
};

export default SideMenu;