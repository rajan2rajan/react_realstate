import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

export default router;
