import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/Context/UserContext";
import { Button } from "../ui/button";
import {  useTasks } from "@/Context/TaskContext";

const Logout = () => {
  const { logout } = useUser();
const { resetTasks } = useTasks();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    resetTasks()
    navigate("/");
  };

  return (
    <div className="p-4">
      <Button variant="default" size="lg" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
