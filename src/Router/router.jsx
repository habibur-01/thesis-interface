import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Details from "../Pages/Details/Details";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
          loader: ({ params }) => fetch(`https://thesis-final.vercel.app/data/${params.id}`)
        }
      ]
    },
  ]);
  export default router;