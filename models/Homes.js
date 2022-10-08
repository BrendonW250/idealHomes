const mongoose = require('mongoose')
const Schema = mongoose.Schema


const HomeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   }
})

  module.exports = mongoose.model("Home", HomeSchema);