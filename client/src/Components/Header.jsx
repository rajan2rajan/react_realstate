import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-up">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in">Sign In</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
    );
}
