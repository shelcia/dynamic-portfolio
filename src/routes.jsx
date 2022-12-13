import { Outlet } from "react-router-dom";

// landing page
import HomePage from "./pages/auth/HomePage";

// auth pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Verification from "./pages/auth/Verification";

// dashboard pages
import Dashboard from "./pages/dashboard/Dashboard";
import AddPortfolio from "./pages/dashboard/addPortfolio/AddPortflio";
import Portfolio from "./pages/portfolio/Portfolio";
// import EditPortfolio from "./pages/dashboard/editDashboard/EditPortfolio";

//Layout
import HomeLayout from "./components/layout/HomeLayout";
import DashboardLayout, {
  AuthGuard,
} from "./components/layout/DashboardLayout";

// Context
import { TemplateProvider } from "./context/TemplateContext";
import { ThemeProvider } from "./context/ThemeContext";
import Blog_template from "./pages/Blog_templates/template";
import BlogTemplate from "./pages/Blog_templates/template";

const routes = [
  {
    path: "portfolio/:id",
    element: (
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    ),
  },
  {
    path: "",
    element: (
      <TemplateProvider>
        <HomeLayout>
          <Outlet />
        </HomeLayout>
      </TemplateProvider>
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
      <TemplateProvider>
        <AuthGuard>
          <DashboardLayout>
            <Outlet />
          </DashboardLayout>
        </AuthGuard>
      </TemplateProvider>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "add-portfolio/:template",
        element: <AddPortfolio />,
      },
      {
        path: "blog-template",
        element: <BlogTemplate />,
      },
      // {
      //   path: "edit-portfolio/:id",
      //   element: <EditPortfolio />,
      // },
    ],
  },
];

export default routes;
