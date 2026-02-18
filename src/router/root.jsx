import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home.jsx";
import ErrorPage from "../errors/404.jsx";
import App from "../App.jsx";
import Team from "../pages/team/team.jsx";
import Login from "../pages/login/login.jsx";
import Register from "../pages/register/register.jsx";
import TeamDetails from "../pages/teamDetails/teamDetails.jsx";
import Admin from "../pages/admin/admin.jsx";
import Profile from "../pages/profile/profile.jsx";

const router = createBrowserRouter([
  {
    path: "/finalfocus/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/finalfocus/",
        element: <Home />,
      },
      {
        path: "/finalfocus/login",
        element: <Login />,
      },
      {
        path: "/finalfocus/register", 
        element: <Register />,
      },
      {
        path: "/finalfocus/teams",
        element: <Team />,
      },
            {
        path: "/finalfocus/teams/:id",
        element: <TeamDetails />,
      },
       {
        path: "/finalfocus/admin",
        element: <Admin />,
      },
      {
        path: "/finalfocus/profile",
        element: <Profile />,
      },

    ],
  },
]);

export default router;
