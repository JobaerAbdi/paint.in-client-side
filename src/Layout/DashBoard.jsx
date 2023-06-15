import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import { BsBookmarkStarFill } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { BsPersonVcardFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";

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
            className={`bg-gray-400 text-white text-xl  w-32 md:w-72 min-h-screen flex-shrink-0 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <div className="py-4 ">
              <div className=" flex items-center gap-2 mb-2 px-2 bg-gray-600">
                <BsBookmarkStarFill></BsBookmarkStarFill>
                <Link to="selectedclasses" className="block py-2">
                  Bookmarked classes
                </Link>
              </div>
              <div className=" flex items-center gap-2 mb-2 px-2 bg-gray-600">
                <MdOutlineAssignment></MdOutlineAssignment>
                <Link to="enrolledclasses" className="block py-2">
                  Enrolled classes
                </Link>
              </div>
            </div>
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
            className={`bg-gray-400 text-white text-xl  w-32 md:w-72 min-h-screen flex-shrink-0 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <div className="py-4 ">
              <div className=" flex items-center gap-2 mb-2 px-2 bg-gray-600">
                <AiFillFileAdd></AiFillFileAdd>
                <Link to="addclasses" className="block py-2">
                  Add A Class
                </Link>
              </div>
              <div className=" flex items-center gap-2 mb-2 px-2 bg-gray-600">
                <BsPersonVcardFill></BsPersonVcardFill>
                <Link to="myclasses" className="block py-2">
                  My Classes
                </Link>
              </div>
            </div>
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

        <div className="flex">
          <div
            className={`bg-gray-400 text-white text-xl  w-32 md:w-72 min-h-screen flex-shrink-0 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >

            <div className="py-4 ">
              <div className=" flex items-center gap-2 mb-2 px-2 bg-gray-600">
                <MdManageAccounts></MdManageAccounts>
                <Link to="manageClasses" className="block py-2">
                  Manage classes
                </Link>
              </div>
              <div className=" flex items-center gap-2 mb-2 px-2 bg-gray-600">
                <BsPersonVcardFill></BsPersonVcardFill>
                <Link to="manageUser" className="block py-2">
                  Manage users
                </Link>
              </div>
            </div>
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
};

export default Dashboard;
