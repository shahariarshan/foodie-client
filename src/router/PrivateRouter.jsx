/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return (
           <Spinner/>
        )
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/signUp' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRouter;