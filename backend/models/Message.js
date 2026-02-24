const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    recipient: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Message", messageSchema);