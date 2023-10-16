import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/main/main.page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        // loader: rootLoader,
    },
]);
