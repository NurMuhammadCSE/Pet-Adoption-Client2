import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import PetListing from "../pages/PetListing/PetListing";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PetListingDetails from "../pages/PetListing/PetListingDetails";

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
        element: <PetListingDetails></PetListingDetails>,
        loader : (({params}) => fetch(`http://localhost:5000/details/${params.id}`))
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
