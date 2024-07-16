import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'dashboard',
                element: <Home></Home>
            },
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: '/',
        element: <Register></Register>
    },
]);

export default router;