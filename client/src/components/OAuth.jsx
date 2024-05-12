import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signInSucces } from "../redux/user/userSlice.jsx";

function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            // const provider = new GoogleAuthProvider();
            // const auth = getAuth(app);
            // const result = await signInWithPopup(auth, provider);
            // const data = {
            //     name: result.user.displayName,
            //     email: result.user.email,
            //     photo: result.user.photoURL,
            // };
            // await axios.post("http://127.0.0.1:8000/api/auth/google", data);
            // console.log(data);
            // dispatch(signInSucces(data));
            // navigate("/");

            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            const res = await fetch("/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });
            const data = await res.json();
            dispatch(signInSucces(data));
            navigate("/");
        } catch (error) {
            // dispatch(signInFail(error.response.data.message));
            console.log("could not sign in with google", error.response.data.message);
        }
    };
    return (
        <button
            onClick={handleGoogleClick}
            type="button"
            className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
            Continue with google
        </button>
    );
}

export default OAuth;
