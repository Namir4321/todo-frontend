import { Navigate } from "react-router-dom";
import { useUser } from "@/Context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  console.log(user)
  const isAuthenticated = user || (storedUser && JSON.parse(storedUser));
   const storedUser = localStorage.getItem("user");
  if (!user&&!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

 if (!isAuthenticated) {
   return <Navigate to="/" replace />;
 }
 
 return children;
};

export default ProtectedRoute;
