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
import ManageClasses from "../pages/Dashboard/ManageClasses";
import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";
import StudentRoute from "./StudentRoute";
import ManageStudents from "../pages/Dashboard/ManageStudents";
import UpdateMyClass from "../pages/Dashboard/UpdateMyClass";
import Feadback from "../pages/Dashboard/Feadback";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
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
        errorElement: <ErrorPage />,
        children: [
            // student routes 
            {
                path: 'my_selected_class',
                element: <StudentRoute><SelectedClass></SelectedClass></StudentRoute>
            },
            {
                path: 'my_enroled_class',
                element: <StudentRoute><EnroledClass></EnroledClass></StudentRoute>
            },
            {
                path: 'payment/:id',
                element: <StudentRoute><Payment></Payment></StudentRoute>

            },
            {
                path: 'payment_history',
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
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
            {
                path: 'update/:id',
                element: <TeacherRoute><UpdateMyClass></UpdateMyClass></TeacherRoute>
            },

            // Admin routes 
            {
                path: 'manage_students',
                element: <AdminRoute><ManageStudents></ManageStudents></AdminRoute>
            },
            {
                path: 'manage_classes',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'feadback/:id',
                element: <AdminRoute><Feadback></Feadback></AdminRoute>
            }
        ]

    }
])
export default router