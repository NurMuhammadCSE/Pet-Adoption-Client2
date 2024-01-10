import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import PetListing from "../pages/PetListing/PetListing";
import PetDetails from "../pages/PetDetails/PetDetails";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/pet-listing",
        element: <PetListing></PetListing>,
      },
      {
        path: `details/:id`,
        element: <PetDetails></PetDetails>,
      },
      {
        path:'/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'login',
        element: <Login></Login>
      }
    ],
  },
]);
