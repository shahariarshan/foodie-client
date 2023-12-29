import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import logo from '/Green_Simple_Modern_Healthy_Food_Logo-removebg-preview.png'
import { FaPlusCircle } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";




const DashBoardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <div className="flex justify-between">
                        <label htmlFor="my-drawer-2" className="btn btn-primary flex justify-start right-0 drawer-button lg:hidden"><MdDashboard /></label>
                        {/* <button className="btn bg-green text-white">Logout</button> */}
                    </div>
                
                        <Outlet />
                   
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <div className="flex justify-start mb-3">
                        <img className=' w-20' src={logo} alt="" />
                        <span className="badge badge-primary">Admin</span>
                        </div>
                        <li><Link to='/dashboard'><MdDashboard />Dashboard</Link></li>
                        <li><Link to='/dashboard'><IoBagHandle />Manage Booking</Link></li>
                        <li><Link to='/dashboard'><FaPlusCircle />Add Menu</Link></li>
                        <li><Link to='/dashboard'><FaRegEdit />Manage Items</Link></li>
                        <li><Link to='/dashboard/user'><FaUsers />All Users</Link ></li>
                        <div className="divider divider-neutral"></div>  
                        <li><Link to='/'><IoHome />Home</Link></li>
                        <li><Link to='/menu'><FaCartShopping />Menu</Link></li>
                        <li><Link to='/dashboard'><FaLocationArrow />Other Tracking</Link></li>
                        <li><Link to='/dashboard'><MdContactSupport />Customer Support</Link></li>
                        
                    
                    </ul>
                   

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;