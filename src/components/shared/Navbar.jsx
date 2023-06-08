
import { NavLink } from 'react-router-dom';
import MyContainer from '../MyContainer';
import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react';



const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    const navLinks =
        <>
            < li > <NavLink to='/'
                className={({ isActive }) => isActive ? "text-red-400" : ""
                }>Home</NavLink>
            </ li>
            < li > <NavLink to='/instructors'
                className={({ isActive }) => isActive ? "text-red-400" : ""
                }>Instructors</NavLink>
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
                    <div className='hidden md:block'>
                        <button className='btn btn-neutral'>Login</button>
                    </div>



                    <div onClick={() => setOpen(!isOpen)} className='md:hidden'>
                        <Hamburger hideOutline={false} />
                    </div>

                    {/* mobile rensponsive  */}
                    <ul className={`${isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'} left-0 top-[60px] origin-top duration-300 md:hidden  absolute  bg-black text-white w-full pl-5 space-y-3 py-5 mt-3 z-10`}>

                        {navLinks}
                        <div className=''>
                            <button className='btn btn-neutral'>Login</button>
                        </div>

                    </ul>

                </div>
            </MyContainer>
        </div>
    );
};

export default Navbar;