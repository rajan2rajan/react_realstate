import React from "react";
import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import { useState } from "react";
import axios from "axios";

function SignIn() {
    const [formData, setFormData] = useState("");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            await axios.post("http://127.0.0.1:8000/api/auth/signup", formData);
            console.log("success");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="p-3 max-w-lg mx-auto">
                <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <InputComponent
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                    />

                    <InputComponent type="email" name="email" id="email" onChange={handleChange} />

                    <InputComponent
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                    />

                    <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                        Sign in
                    </button>
                </form>
                <div className="flex gap-2 mt-5">
                    <p>Dont have an account?</p>
                    <Link to={"/sign-up"}>
                        <span className="text-blue-700">Sign up</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SignIn;
