import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/Menu/Menu";
import SignUp from "../pages/SignUp";
import UpdateProfile from "../pages/Dashboard/UpdateProfile";
import Cart from "../pages/Menu/Cart";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/menu',
            element:<Menu/>
        },
        {
            path:'/cart-items',
            element:<Cart/>
        },
        {
            path:'/update-profile',
            element:<UpdateProfile/>
        },
      ]
    },
    {
      path:'/signUp',
      element:<SignUp/>
    }
  ]);
  export default router