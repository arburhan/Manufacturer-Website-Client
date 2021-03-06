import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const handleLogOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const [user] = useAuthState(auth);

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>

        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>

        }
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/allTools'>All Products</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        {user ? <button onClick={handleLogOut} >Log Out</button> : <li><Link to='/login'>Log in</Link></li>}
    </>
    return (
        <nav>
            <div className="navbar bg-[#3d4451] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#3d4451] text-white rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">AR Tools Industries</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                {user && <div className="navbar-end lg:hidden">
                    <label htmlFor="toolDrawer" className="btn btn-primary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>}
            </div>
        </nav>
    );
};

export default Navbar;