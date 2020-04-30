const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    comment: {
        type: String,
        required: "You must enter a comment"
    }
})

var Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;