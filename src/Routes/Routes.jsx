import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/DashBoard";
import NotFound from "../Pages/NotFound/NotFound";
import MyClasses from "../Pages/StudentPage/MyClasses";
import EnrolledClasses from "../Pages/StudentPage/EnrolledClasses";
import AddClasses from "../Pages/InstructorPage/AddClasses";
import Payment from "../Pages/Payment/Payment";
import MyAddedClasses from "../Pages/InstructorPage/MyAddedClasses";
import ManageClasses from "../Pages/AdminPage/ManageClasses";
import ManageUsers from "../Pages/AdminPage/ManageUsers";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/enroll/payment',
            element: <Payment></Payment>
        },
        
      ]
    },
    {
      path:"dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "selectedclasses",
          element:<MyClasses></MyClasses>
        },
        {
          path: "enrolledclasses",
          element:<EnrolledClasses></EnrolledClasses>
        },
        {
          path: "addclasses",
          element:<AddClasses></AddClasses>
        },
        {
          path: "myclasses",
          element:<MyAddedClasses></MyAddedClasses>
        },
        {
          path: "manageClasses",
          element:<ManageClasses></ManageClasses>
        },
        {
          path: "manageUser",
          element:<ManageUsers></ManageUsers>
        },
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ]);