import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import ErrorPage from "../errors/404.jsx";
import App from "../App.jsx"

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
        ]
    }
]);

export default router;
