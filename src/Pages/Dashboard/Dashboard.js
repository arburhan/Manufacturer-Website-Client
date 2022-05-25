import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="power-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className="text-3xl my-3">Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className='container mx-3'>
                <div className="drawer-side">
                    <label htmlFor="power-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 rounded-md text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addreview'>Add a Review</Link></li>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                        <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;