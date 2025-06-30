const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
    },
    roles: {
        Editor: {
            type: String,
            default: "editor",
        },
        Admin: String,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
    },
    program: [
        {
            type: Schema.Types.ObjectId,
            refPath: "Program",
        },
    ],
    isAdmin: {
        type: Boolean,
        default: false,
    },
    tasksCovered:{
        type: [String],
    },
    refreshToken: [String],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
