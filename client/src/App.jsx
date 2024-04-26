import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-up" element={SignUp} />
                <Route path="/sign-in" element={SignIn}></Route>
                <Route path="/profile" element={Profile}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;