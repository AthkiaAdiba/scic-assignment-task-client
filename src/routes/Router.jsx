import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Register></Register>
            },
        ]
    },
]);

export default router;