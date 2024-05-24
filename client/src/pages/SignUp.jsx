import React from "react";
import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { useDispatch } from "react-redux";
import { signInStart } from "../redux/user/userSlice";

function SignUp() {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // fetch start
            dispatch(signInStart());
            // setLoading(true);
            setError(null);
            console.log(formData);

            const data = await axios.post("/api/auth/signup", formData);
            if (data.status === 200) {
                // dispatch success action
            }
            setLoading(false);
            setError(null);
            navigate("/signin");
        } catch (error) {
            // dispatch fail action
            console.log("here is running");
            setLoading(false);
            setError(error.response.data.message);
        }
    };

    return (
        <>
            <div className="p-3 max-w-lg mx-auto">
                <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="username"
                        className="border p-3 rounded-lg"
                        id="username"
                        onChange={handleChange}
                    />
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
                        {loading ? "Loading..." : "Sign Up"}
                    </button>
                    <OAuth />
                </form>
                <div className="flex gap-2 mt-5">
                    <p>Have an account?</p>
                    <Link to={"/sign-in"}>
                        <span className="text-blue-700">Sign in</span>
                    </Link>
                </div>
                {error && <p className="text-red-500 mt-5">{error}</p>}
            </div>
        </>
    );
}

export default SignUp;
