import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import ManagerRegister from "../Manager/ManagerRegister";
import AuthLayout from "../Layout/AuthLayout";
import EmployeeRegister from "../Employee/EmployeeRegister";
import Login from "../Auth/Login";
import MyProfile from "../Employee/MyProfile";
import DashboardLayout from "../Dashoard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AddAsset from "../Dashoard/AddAsset";
import HrRoute from "./HrRoute";
import HrAssetList from "../Manager/HrAssetList";
import RequestAsset from "../Employee/RequestAsset";
import EmployeeRoute from "./EmployeeRoute";
import AssetDetails from "../Employee/AssetDetails";
import RequestedAsset from "../Dashoard/RequestedAsset";
import Error from "../Components/Error";
import MyAsset from "../Employee/MyAsset";






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
        element: <EmployeeRegister></EmployeeRegister>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/add-asset",
        element: (
          <HrRoute>
            <AddAsset></AddAsset>
          </HrRoute>
        ),
      },
      {
        path: "/dashboard/asset-list",
        element: (
          <HrRoute>
            <HrAssetList></HrAssetList>
          </HrRoute>
        ),
      },
      {
        path: "/dashboard/request-an-asset",
        element: (
          <EmployeeRoute>
            <RequestAsset></RequestAsset>
          </EmployeeRoute>
        ),
      },
      {
        path: "/dashboard/:id",
        element: (
          <EmployeeRoute>
            <AssetDetails></AssetDetails>
          </EmployeeRoute>
        ),
      },
      {
        path: "/dashboard/my-asset",
        element: (
          <EmployeeRoute>
          <MyAsset></MyAsset>
          </EmployeeRoute>
        ),
      },
      {
        path: "/dashboard/requested-asset",
        element: (
          <HrRoute>
            <RequestedAsset></RequestedAsset>
          </HrRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
