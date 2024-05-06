import React from "react";
import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [formData, setFormData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(null);
            setLoading(true);
            await axios.post("/api/auth/signup", formData);
            setLoading(false);
            navigate("/signup");
        } catch (err) {
            // console.log(err.response.data.message);
            setError(err.response.data.message);
            if (err.response.data.statusCode === 500) {
                setError("Internal server error");
                setLoading(false);
                return;
            }
            if (err.response.data.sucess == false) {
                setError(response.message);
                return;
            }
            setLoading(false);
        }
    };

    return (
        <>
            <div className="p-3 max-w-lg mx-auto">
                <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
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

                    <button
                        disabled={loading}
                        className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                    >
                        {loading ? "Loading..." : "Sign In"}
                    </button>
                </form>
                <div className="flex gap-2 mt-5">
                    <p> Have an account?</p>
                    <Link to={"/signin"}>
                        <span className="text-blue-700">Sign in(login)</span>
                    </Link>
                </div>

                {error && <p className="text-red-500">{error}</p>}
            </div>
        </>
    );
}

export default SignUp;
