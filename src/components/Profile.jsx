/* eslint-disable react/prop-types */


const Profile = ({ user }) => {
    const{photoURL}=user;
    return (
        <div>
            <div className="drawer drawer-end z-50">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn rounded-full avatar btn-circle">
                       {
                        user.photoURL?
                        <>
                         <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={photoURL}/>
                        </div>
                        </>
                        :
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src='/Blank image.jpg'/>
                    </div>

                       }
                    </label>
                    {/* <img  htmlFor="my-drawer-4" className="drawer-button rounded-full btn btn-circle" src={photoURL} alt="" /> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Profile</a></li>
                        <li><a>Order</a></li>
                        <li><a>Settings</a></li>
                        <li><a>LogOut</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;