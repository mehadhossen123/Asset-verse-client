import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom"; // 
import Logo from "../Logo/Logo";
import useAuth from "../../Hooks/useAuth";
import Loader from "../Loading/Loader";
import { CgProfile } from "react-icons/cg";
import Swal from "sweetalert2";
import { TbLogout2 } from "react-icons/tb";
import { RxActivityLog } from "react-icons/rx";
import bgImage from '../../assets/A good day at work!.jpeg'




const Navbar = () => {
  const { user, userLogout, loading } = useAuth();
  // const {userRole}=useRole()
 
 
  

  const [dropdownOpen, setDropdownOpen] = useState(false);
  // find user specific role 
  
  
  if (loading) {
    return <Loader />;
  }

  const handleLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-green-500 rounded-2xl font-bold py-1 px-4"
              : " text-yellow-700 font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
          to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-green-500 font-bold rounded-2xl py-1 px-4"
                : "text-yellow-700 font-bold"
            }
          >
           Dashboard
          </NavLink>
        </li>
      ) : (
        <>
          <li>
            <NavLink
              to="/auth/manager-register"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-green-500 font-bold rounded-2xl py-1 px-4"
                  : "text-yellow-700 font-bold"
              }
            >
              Join as HR Manager
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth/employee-register"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-green-500 font-bold rounded-2xl py-1 px-4"
                  : "text-yellow-700 font-bold"
              }
            >
              Join as Employee
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div  className="navbar bg-black fixed z-10  w-full  max-w-7xl shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {user? <Link className="text-yellow-700 font-bold"  onClick={handleLogout}>
        logout</Link>:  (
          <Link to={"/auth/login"}>
            <p className="text-yellow-800 font-bold">Login</p>
          </Link>
        )}

        {/* Profile always visible */}
        <div className="relative">
          <img
            className="w-[50px] h-[50px] rounded-full cursor-pointer"
            src={
              user?.photoURL || "https://www.w3schools.com/howto/img_avatar.png"
            }
            alt="profile"
            onClick={() => user && setDropdownOpen(!dropdownOpen)} // ✅ only toggles if user exists
          />

          {/* Dropdown only if user exists */}
          {dropdownOpen && user && (
            <ul className="absolute right-0 mt-2 w-44 text-white shadow-lg rounded-lg py-2 z-50">
              <li>
                <Link
                  to="/auth/profile"
                  className="block px-4 py-2 "
                  onClick={() => setDropdownOpen(false)}
                >
                  <div className="flex items-center">
                    <CgProfile />
                    <span className="ml-1 font-bold"> My Profile</span>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 "
                  onClick={() => setDropdownOpen(false)}
                >
                  <div className="flex items-center">
                    <RxActivityLog />
                    <span className="ml-1 font-bold">Dashboard</span>
                  </div>
                </Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 "
                >
                  <div className="flex items-center">
                    <TbLogout2 />
                    <span className="ml-1 font-bold">Logout</span>
                  </div>
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
