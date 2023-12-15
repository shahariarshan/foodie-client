
import { useEffect, useState } from 'react';
import logo from '/Green_Simple_Modern_Healthy_Food_Logo-removebg-preview.png'
import { BiSolidPhoneCall } from "react-icons/bi";
const Navbar = () => {
    const [isSticky,setSticky] = useState(false)
    useEffect(()=>{
        const handelScroll =() =>{
            const offset= window.scrollY
            if(offset >0){
                setSticky(true)
            }
            else{
                setSticky(false)
            }
        }
        window.addEventListener('scroll',handelScroll);
        return ()=>{
            window.addEventListener('scroll',handelScroll);
        }
    }
   
    ,[])
    const navLink =
      (
        <>
        <li><a>Home</a></li>
        <li tabIndex={0}>
            <details>
                <summary>Menu</summary>
                <ul className="p-2">
                    <li><a>All</a></li>
                    <li><a>Pizza</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>


            </details>

        </li>
        <li tabIndex={0}>
            <details>
                <summary>Services</summary>
                <ul className="p-2">
                    <li><a>Online Order</a></li>
                    <li><a>Table Booking</a></li>
                    <li><a>Order Tracking</a></li>
                </ul>

            </details>

        </li>
        <li><a>Offers</a></li>
    </>
      )
    return (
        <header className='max-w-screen-2xl  container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out'>
            <div className={`navbar xl:px-24 h-24 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out":""}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a href="/">  <img className='h-28 w-28' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle hidden lg:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle flex justify-center items-center mr-3">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">0</span>
                        </div>
                    </div>
                    <a className="btn bg-green flex gap-2 text-white rounded-full px-6"><BiSolidPhoneCall />Contact</a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;