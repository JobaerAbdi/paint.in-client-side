import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext);
  const role = userInfo?.userRole;

  if (role === "student") {
    return (
      <div>
        <Navbar></Navbar>

        <p>student dashboard</p>
        <p>student dashboard</p>
        <p>student dashboard</p>
        <p>student dashboard</p>
        <p>student dashboard</p>
      </div>
    );
  }
  if (role === "instructor") {
    return (
      <div>
        <Navbar></Navbar>

        <p>instructor dashboard</p>
        <p>instructor dashboard</p>
        <p>instructor dashboard</p>
        <p>instructor dashboard</p>
        <p>instructor dashboard</p>
      </div>
    );
  }
  if (role === "Admin") {
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
