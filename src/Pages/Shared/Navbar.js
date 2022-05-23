import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        <li><Link to='/login'>Log in</Link></li>
    </>
    return (
        // rgb(61 68 81) / var(--tw-bg-opacity))
        <nav>
            <div class="navbar bg-[#3d4451] text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#3d4451] text-white rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn">Get started</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;