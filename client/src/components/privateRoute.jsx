import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";
import Profile from "../pages/Profile";

function privateRoute() {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser ? <Profile /> : <Navigate to="/signin" />;
}

export default privateRoute;
