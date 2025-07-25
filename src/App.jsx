import Board from "./components/Board/Board";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { UserProvider } from "./Context/UserContext";
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Routes } from "react-router";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body";
import { TaskProvider } from "./Context/TaskContext";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/task",
        element: (
          <ProtectedRoute>
            <Board />
          </ProtectedRoute>
        ),
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="global-padding">
      <UserProvider>
        <TaskProvider>
          <RouterProvider router={appRouter} />
        </TaskProvider>
      </UserProvider>
    </div>
  );
}

export default App;
