import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext);
  const role = userInfo?.userRole;

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  if (role === "student") {
    return (
      <div>
        <Navbar></Navbar>

        <div className="flex">
          <div
            className={`bg-gray-800 text-gray-400 w-32 md:w-64 min-h-screen flex-shrink-0 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="py-4">
              <li>
                <Link to="selectedclasses" className="block py-2 px-4">
                  My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="enrolledclasses" className="block py-2 px-4">
                  My Enrolled Classes
                </Link>
              </li>
             
            </ul>
          </div>
          <div className="flex-grow">
            <button
              className="bg-gray-500 text-white p-2 rounded-md md:hidden"
              onClick={toggleNav}
            >
              {isOpen ? (
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
            {/* Rest of your content */}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
  }
  if (role === "instructor") {
    return (
        <div>
        <Navbar></Navbar>

        <div className="flex">
          <div
            className={`bg-gray-800 text-gray-400 w-32 md:w-64 min-h-screen flex-shrink-0 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="py-4">
              <li>
                <Link to="addclasses" className="block py-2 px-4">
                  Add A Class
                </Link>
              </li>
              <li>
                <Link to="myclasses" className="block py-2 px-4">
                  My Classes
                </Link>
              </li>
             
            </ul>
          </div>
          <div className="flex-grow">
            <button
              className="bg-gray-500 text-white p-2 rounded-md md:hidden"
              onClick={toggleNav}
            >
              {isOpen ? (
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
            {/* Rest of your content */}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
  }
  if (role === "admin") {
    return (
      <div>
        <Navbar></Navbar>

        <p>Admin dashboard</p>
        <p>Admin dashboard</p>
        <p>Admin dashboard</p>
        <p>Admin dashboard</p>
        <p>Admin dashboard</p>
      </div>
    );
  }
};

export default Dashboard;
