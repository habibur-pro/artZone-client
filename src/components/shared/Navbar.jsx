
import { Link, NavLink } from 'react-router-dom';
import MyContainer from '../MyContainer';
import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import profileImage from '../../assets/images/profile.jpg'




const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const { user, logOut, userRole } = useAuth()
    console.log('user from navbar', user)

    console.log('user role from navbar', userRole)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('access-token')
            })
            .catch(error => console.log(error))
    }

    const navLinks =
        <>
            < li > <NavLink to='/'
                className={({ isActive }) => isActive ? "text-red-400" : ""
                }>Home</NavLink>
            </ li>
            < li > <NavLink to='/teachers'
                className={({ isActive }) => isActive ? "text-red-400" : ""
                }>Teachers</NavLink>
            </ li>
            < li > <NavLink to='/classes'
                className={({ isActive }) => isActive ? "text-red-400" : ""
                }>Classes</NavLink>
            </ li>
            < li > <NavLink to='/dashboard'
                className={({ isActive }) => isActive ? "text-red-400" : ""
                }>Dashboard </NavLink>
            </ li>
        </>

    return (
        <div className='py-3 border-b bg-transparent bg-white'>
            <MyContainer>
                <div className='flex justify-between items-center '>
                    <h3 className='text-3xl font-bold'>Art<span>Zone</span></h3>
                    <ul className='hidden md:flex gap-5'>

                        {navLinks}

                    </ul>


                    <div className='hidden md:flex space-x-5'>
                        {user &&
                            <img className='w-12 h-12 rounded-full' src={user && user.photoURL ? user.photoURL : profileImage} />
                        }
                        {
                            user ? <button onClick={handleLogOut} className='btn'>LogOut</button>
                                : <Link to='/login'>  <button className='btn btn-neutral'>Login</button></Link>
                        }

                    </div>



                    <div onClick={() => setOpen(!isOpen)} className='md:hidden'>
                        <Hamburger hideOutline={false} />
                    </div>

                    {/* mobile rensponsive  */}
                    <ul className={`${isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'} left-0 top-[60px] origin-top duration-300 md:hidden  absolute  bg-secondary  text-white w-full pl-5 space-y-3 py-5 mt-3 z-10`}>

                        {navLinks}
                        {/* profile image  */}
                        <div className='space-y-5'>
                            {user &&
                                <img className='w-12 h-12 rounded-full' src={user && user.photoURL ? user.photoURL : profileImage} />
                            }

                            {/* login logout button  */}
                            {
                                user ? <button onClick={handleLogOut} className='btn'>LogOut</button>
                                    : <Link to='/login'>  <button className='btn btn-neutral'>Login</button></Link>
                            }

                        </div>


                    </ul>

                </div>
            </MyContainer>
        </div>
    );
};

export default Navbar;