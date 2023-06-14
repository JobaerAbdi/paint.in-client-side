import React, { useContext } from "react";
import logo from "/Projects/paint-in-client/src/assets/logo.png";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const { user, logOut, userInfo } = useContext(AuthContext);
  const handleLogOut = () => {
    // console.log("logout perform")
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className=" mx-10 md:mx-20 rounded-lg sticky top-0 z-10 shadow backdrop-filter backdrop-blur-lg ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between  md:block">
            <a href="javascript:void(0)">
              <img
                className=" w-20 md:w-20"
                src={logo}
                alt="my gif"
                height="auto"
              />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border myshadow"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="">
                <Link
                  to="/"
                  className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  to="/instructors"
                  className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md"
                >
                  Instructors
                </Link>
              </li>
              <li className="">
                <Link
                  to="/classes"
                  className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md"
                >
                  Classes
                </Link>
              </li>
              <li className="">
                { 
                  userInfo?.userRole === "student" && <Link
                  to="/dashboard/selectedclasses"
                  className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md"
                >
                 S Dashboard
                </Link>
                }
                { 
                  userInfo?.userRole === "instructor" && <Link
                  to="/dashboard/addclasses"
                  className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md"
                >
                 I Dashboard
                </Link>
                }
                { 
                  userInfo?.userRole === "admin" && <Link
                  to="/dashboard/manageclasses"
                  className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md"
                >
                 A Dashboard
                </Link>
                }
                
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            className={` pb-3 mt-8 md:flex md:justify-end md:items-center md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {user?.uid ? (
              <>
                {userInfo?.photoUrl && (
                  <img
                    onClick={() => navigate("/menu")}
                    src={userInfo?.photoUrl}
                    className="w-8 rounded-full md:mx-3"
                    alt=""
                  ></img>
                )}
                <p className="mx-1 text-primary font-semibold text-xs md:text-sm">
                  {user?.displayName || userInfo?.name}
                </p>
                <button
                  onClick={handleLogOut}
                  className="flex items-center p-1 text-sm text-red-600 border border-red-600  rounded hover:bg-red-600 hover:text-white"
                >
                  <span>Logout</span>
                  <FiLogOut className="pl-1 text-xl"></FiLogOut>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center p-1 px-2  text-sm text-white bg-sky-500 rounded hover:bg-lime-400"
                >
                  Login
                </Link>
                <p className=" p-1 px-2">or</p>
                <Link
                  to="/signup"
                  className="flex items-center p-1 px-2  text-sm text-white bg-sky-500 rounded hover:bg-lime-400"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
