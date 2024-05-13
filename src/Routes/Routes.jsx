
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";

import AddServices from "../Pages/AddServices";
import ManageServices from "../Pages/ManageServices";
import ServiceToDo from "../Pages/ServiceToDo";
import Services from "../Pages/Services";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import ForPurchase from "../Pages/ForPurchase";
import UpdateServices from "../Pages/UpdateServices";
import PurchasedServices from "../Pages/PurchasedServices";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
           path: '/allServices',
           element: <Services></Services>
        },
        {
            path: '/serviceDetails/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: () => fetch('http://localhost:5000/services')
        },
        {
            path:'/forPurchase/:id',
            element: <ForPurchase></ForPurchase>,
            loader: () => fetch('http://localhost:5000/services')
        },
        {
            path: '/addServices',
            element: <AddServices></AddServices>
        },
        {
            path: '/manageServices',
            element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
        },
        {
            path: '/bookedServices',
            element: <PrivateRoute><PurchasedServices></PurchasedServices></PrivateRoute>
        },
        {
            path: '/serviceToDo',
            element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
        },
        {
            path: '/updateServices/:id',
            element: <UpdateServices></UpdateServices>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            
        }
      ]
    },
  ]);

  export default router;