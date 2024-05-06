import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [formData, setFormData] = useState({});
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
            await axios.post("/api/auth/signin", formData);
            setLoading(false);
            navigate("/");
        } catch (error) {
            console.log(error.response.data.success);
            if (error.response.data.success === false) {
                setError(error.response.data.message);
                setLoading(false);
                return;
            }
            setError(error.response.data.message);
            setLoading(false);
            return;
        }
    };

    return (
        <>
            <div className="p-3 max-w-lg mx-auto">
                <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="email"
                        className="border p-3 rounded-lg"
                        id="email"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="border p-3 rounded-lg"
                        id="password"
                        onChange={handleChange}
                    />

                    <button
                        disabled={loading}
                        className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                    >
                        {loading ? "loading..." : "Login"}
                    </button>
                </form>
                <div className="flex gap-2 mt-5">
                    <p>Dont have an account?</p>
                    <Link to={"/signup"}>
                        <span className="text-blue-700">Sign up</span>
                    </Link>
                </div>
            </div>{" "}
            ;{error && <p className="text-red-500 text-center mt-5">{error}</p>}
        </>
    );
}

export default SignIn;
