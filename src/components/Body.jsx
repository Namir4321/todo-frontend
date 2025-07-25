import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useUser } from "@/Context/UserContext";
const Body = () => {
  const { user } = useUser();
  return (
    <div>
      {user && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Body;
