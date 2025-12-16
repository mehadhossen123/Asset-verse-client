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
import MyEmployee from "../Manager/MyEmployee";
import Package from "../Components/Package";
import UpgradePackage from "../Manager/UpgradePackage";
import MyTeam from "../Employee/MyTeam";
import UpdatedProfile from "../Pages/UpdatedProfile";
import ForgetPassword from "../Auth/ForgetPassword";
import Payment from "../Dashoard/Payment/Payment";
import PaymentCancelled from "../Payment/PaymentCancelled";
import PaymentSuccess from "../Payment/PaymentSuccess";
import PaymentHistory from "../Manager/PaymentHistory";
import ManagerHome from "../Manager/ManagerHome";






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
        path: "/auth/change-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/auth/profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/auth/update",
        element: <UpdatedProfile></UpdatedProfile>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: (
          <HrRoute>
            <ManagerHome></ManagerHome>
          </HrRoute>
        ),
      },
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
        path: "/dashboard/upgrade-package",
        element: (
          <HrRoute>
            <UpgradePackage></UpgradePackage>
          </HrRoute>
        ),
      },
      {
        path: "/dashboard/my-employee",
        element: (
          <HrRoute>
            <MyEmployee></MyEmployee>
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
        path: "/dashboard/my-team",
        element: (
          <EmployeeRoute>
            <MyTeam></MyTeam>
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
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/payment-history",
        element: (
          <HrRoute>
            <PaymentHistory></PaymentHistory>
          </HrRoute>
        ),
      },
      {
        path: "/dashboard/payment-canceled",
        element: <PaymentCancelled></PaymentCancelled>,
      },
      {
        path: "/dashboard/payment-success",
        element: <PaymentSuccess></PaymentSuccess>,
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
