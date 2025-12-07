import React from "react";

import { NavLink } from "react-router";

import { Link } from "react-router";
import Logo from "../Logo/Logo";
// import useAuth from "../../Hooks/useAuth";



const Navbar = () => {
  // const { user, userLogout } = useAuth;


  // if (loading) {
  //   return <Loading></Loading>;
  // }

  // const handleLogout = () => {
  //   userLogout()
  //     .then()
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  const links = (
    <>
      <li>
        <NavLink
        to="/"
          className={({ isActive }) =>
            isActive ? "text-white bg-green-500 rounded-2xl font-bold py-1 px-4" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white bg-green-500 font-bold rounded-2xl py-1 px-4" : ""
          }
          to="/auth/manager-register"
        >
          Join as HR Manager
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white bg-green-500 font-bold rounded-2xl py-1 px-4" : ""
          }
          to="/auth/employee-register"
        >
          Join as HR Manager
        </NavLink>
      </li>

      {/* {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )} */}
      
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
      <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* {user ? (
          <Link onClick={handleLogout} className="btn">
            {" "}
            Log out
          </Link>
        ) : (
          <Link to={"login"}> Login</Link>
        )} */}

        <div className="flex items-center mx-4 gap-3">
         {/* profile image  */}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
