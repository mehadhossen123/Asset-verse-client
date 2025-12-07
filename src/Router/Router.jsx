import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import ManagerRegister from "../Manager/ManagerRegister";
import AuthLayout from "../Layout/AuthLayout";
import EmployeeRegister from "../Employee/EmployeeRegister";
import Login from "../Auth/Login";

export const router = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",

        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/manager-register",
        element: <ManagerRegister></ManagerRegister>,
      },
      {
        path: "/auth/employee-register",
        element: <EmployeeRegister></EmployeeRegister>
      },
      {
        path:"/auth/login",
        element:<Login></Login>
      }
    ],
  },
]);
