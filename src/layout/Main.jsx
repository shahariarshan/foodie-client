import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../App.css'
import Footer from "../pages/home/Footer";



const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-full">
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;