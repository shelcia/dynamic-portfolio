import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { PageLoader } from "./components/common/CustomLoaders";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<PageLoader />}>
      <Component {...props} />
    </Suspense>
  );

// landing page
const HomePage = Loadable(lazy(() => import("./pages/auth/HomePage")));

// auth pages
const Login = Loadable(lazy(() => import("./pages/auth/Login")));
const Signup = Loadable(lazy(() => import("./pages/auth/Signup")));
const Verification = Loadable(lazy(() => import("./pages/auth/Verification")));

// dashboard pages
const Dashboard = Loadable(lazy(() => import("./pages/dashboard/Dashboard")));
const AddPortfolio = Loadable(
  lazy(() => import("./pages/dashboard/addPortfolio/AddPortflio"))
);
const Portfolio = Loadable(lazy(() => import("./pages/portfolio/Portfolio")));
// import EditPortfolio from "./pages/dashboard/editDashboard/EditPortfolio";

// Not Found Page/404 catch
const NotFoundPage = Loadable(
  lazy(() => import("./pages/others/NotFoundPage"))
);

//Layout
import HomeLayout from "./components/layout/HomeLayout";
import DashboardLayout, {
  AuthGuard,
} from "./components/layout/DashboardLayout";

// Context
import { TemplateProvider } from "./context/TemplateContext";
import { ThemeProvider } from "./context/ThemeContext";

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
      // {
      //   path: "edit-portfolio/:id",
      //   element: <EditPortfolio />,
      // },
    ],
  },
  {
    path: "*",
    element: (
      <TemplateProvider>
        <HomeLayout>
          <Outlet />
        </HomeLayout>
      </TemplateProvider>
    ),
    children: [
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
