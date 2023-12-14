import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../App.css'



const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;