
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";

import AddServices from "../Pages/AddServices";
import ManageServices from "../Pages/ManageServices";
import BookedServices from "../Pages/BookedServices";
import ServiceToDo from "../Pages/ServiceToDo";
import Services from "../Pages/Services";
import Login from "../Components/Login";
import Register from "../Components/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
           path: '/services',
           element: <Services></Services>
        },
        {
            path: '/addServices',
            element: <AddServices></AddServices>
        },
        {
            path: '/manageServices',
            element: <ManageServices></ManageServices>
        },
        {
            path: '/bookedServices',
            element: <BookedServices></BookedServices>
        },
        {
            path: '/serviceToDo',
            element: <ServiceToDo></ServiceToDo>
        }
      ]
    },
  ]);

  export default router;