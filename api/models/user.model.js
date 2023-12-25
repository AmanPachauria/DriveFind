import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required : true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        avatar:{
            type: String,
            default: "data:image/png;base64,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",
        },
    }, { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;