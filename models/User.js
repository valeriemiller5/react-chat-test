const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: "You must enter a user name"
    },
    avatar: String
})

var User = mongoose.model("User", UserSchema);

module.exports = User;