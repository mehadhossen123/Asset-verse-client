import useRole from "../Hooks/useRole";

import React from 'react';
import ManagerHome from "../Manager/ManagerHome";
import EmployeeHome from "../Employee/EmployeeHome";
import { Navigate } from "react-router";
import Loader from "./Loading/Loader";

const RoleBasedRedirect = () => {
    const { userRole, roleLoading } = useRole();
    if(roleLoading){
        return <Loader></Loader>
    }
   

      if (userRole === "hr") return <ManagerHome></ManagerHome>;
      if (userRole === "employee")
        return <EmployeeHome></EmployeeHome>
      return <Navigate to="/" />;


   
};

export default RoleBasedRedirect;