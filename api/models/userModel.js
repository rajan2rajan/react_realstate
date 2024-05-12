import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        photo: {
            type: String,
            default:
                "https://blogs.upm.es/in4soc/wp-content/uploads/sites/586/2021/11/CHOXLj9b_400x400-1.jpg",
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;
