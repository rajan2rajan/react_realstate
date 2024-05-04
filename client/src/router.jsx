import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Applayout from "./pages/Applayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";

const router = createBrowserRouter([
    {
        // from here header and outlet will be rendered in the browser
        element: <Applayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/profile", element: <Profile /> },
            { path: "/signin", element: <SignIn /> },
            { path: "/signout", element: <SignOut /> },
        ],
    },
]);

export default router;
