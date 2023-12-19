import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../App.css'
import Footer from "../pages/home/Footer";



const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;