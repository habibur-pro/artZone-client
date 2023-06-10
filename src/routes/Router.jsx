import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Teachers from "../pages/Teachers";
import Classes from "../pages/Classes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'teachers',
                element: <Teachers></Teachers>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            }
        ]
    }
])
export default router