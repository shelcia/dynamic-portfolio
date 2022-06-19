import HomePage from "./pages/auth/HomePage";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Verification from "./pages/auth/Verification";

import Dashboard from "./pages/dashboard/Dashboard";
import AddPortfolio from "./pages/dashboard/addPortfolio/AddPortflio";
import Portfolio from "./pages/templates/Portfolio";
import EditPortfolio from "./pages/dashboard/editDashboard/EditPortfolio";
import AuthGuard from "./components/AuthGuard";
import { Outlet } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";

const routes = [
  {
    path: "",
    element: (
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "verification/:id",
        element: <Verification />,
      },
    ],
  },
  {
    path: "",
    element: (
      <AuthGuard>
        <Outlet />
      </AuthGuard>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "portfolio/:id",
        element: <Portfolio />,
      },
      {
        path: "add-portfolio",
        element: <AddPortfolio />,
      },
      {
        path: "edit-portfolio/:id",
        element: <EditPortfolio />,
      },
    ],
  },
];

export default routes;
