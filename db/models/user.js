const {Schema, model} = require("mongoose")

const User = new Schema({
    username: {type: String, required: true},
    phoneNumber: {type: String, required: true, unique: true},
    role: {type: String, ref: "role"},
})

module.exports = model("User", User)