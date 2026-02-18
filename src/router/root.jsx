import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/home.jsx";
import ErrorPage from "../errors/404.jsx";
import App from "../App.jsx"
import Team from "../pages/team/team.jsx";

const router = createBrowserRouter([
    {
        path: "/finalfocus/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/finalfocus/",
                element: <Home />
            },
            {
                path: "/finalfocus/team",
                element: <Team />
            }
        ]
    }
]);

export default router;
