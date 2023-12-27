/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";


const Profile = ({ user }) => {
    const { photoURL,name } = user;
    const { logOut } = useContext(AuthContext)


    const handelLogOut = () => {
        logOut()
            .then(() => {
                toast(`${user?.displayName} Your Account Logout Success`,
                    {
                        icon: '👏',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                );


            }).catch((error) => {
                console.error(error);
            });
        // <Navigate to='/'></Navigate>
    }
    return (
        <div>
            <div className="drawer drawer-end z-50">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn rounded-full avatar btn-circle">
                        {
                            user.photoURL ?
                                <>
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={photoURL} />
                                    </div>
                                </>
                                :
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src='/Blank image.jpg' />
                                </div>

                        }
                    </label>
                    {/* <img  htmlFor="my-drawer-4" className="drawer-button rounded-full btn btn-circle" src={photoURL} alt="" /> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/update-profile'>Profile</Link></li>
                        <small>{name}</small>
                        <li><Link>Order</Link></li>
                        <li><Link>Settings</Link></li>
                        <li ><Link onClick={handelLogOut}>LogOut</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;