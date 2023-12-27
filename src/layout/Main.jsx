import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../App.css'
import Footer from "../pages/home/Footer";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";
// import Spinner from "../components/Spinner";



const Main = () => {
    // const { loading } = useContext(AuthContext)
    return (
        <div>


            <Navbar />
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer />


        </div>
    );
};

export default Main;