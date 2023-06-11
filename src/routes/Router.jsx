import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Teachers from "../pages/Teachers";
import Classes from "../pages/Classes";
import Dashboard from "../layout/Dashboard";
import PrivetRoute from "./PrivetRoute";
import SelectedClass from "../pages/Dashboard/SelectedClass";
import EnroledClass from "../pages/Dashboard/EnroledClass";
import AddClass from "../pages/Dashboard/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";

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
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            // user routes 
            {
                path: 'my_selected_class',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'my_enroled_class',
                element: <EnroledClass></EnroledClass>
            },
            // teacher routes 
            {
                path: 'add_a_class',
                element: <TeacherRoute><AddClass></AddClass></TeacherRoute>
            },
            {
                path: 'my_classes',
                element: <TeacherRoute><MyClasses></MyClasses></TeacherRoute>
            },
            // Admin routes 
            {
                path: 'manage_users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manage_classes',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            }
        ]

    }
])
export default router