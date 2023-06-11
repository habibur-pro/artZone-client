
import { FiShoppingCart } from 'react-icons/fi';
import { BsCartCheck } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const SideMenu = () => {
    return (
        <div>
            <ul className='dashboard-links'>
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




            </ul>
        </div >
    );
};

export default SideMenu;