import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/Menu/Menu";
import SignUp from "../pages/SignUp";
import UpdateProfile from "../pages/Dashboard/UpdateProfile";
import Cart from "../pages/Menu/Cart";
import DashBoardLayout from "../layout/DashBoardLayout";
import DashBoard from "../pages/Dashboard/Admin/DashBoard";
import User from "../pages/Dashboard/user/User";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/cart-items',
        element: <Cart />
      },
      {
        path: '/update-profile',
        element: <UpdateProfile />
      },
    ]
  },
  {
    path: '/signUp',
    element: <SignUp />
  },
  {
    path: 'dashboard',
    element: <DashBoardLayout />,
    children:
    [
      {
        path: '',
        element: <DashBoard />
      },
      {
        path: 'user',
        element: <User />
      }
    ]
  }
 
]);
export default router