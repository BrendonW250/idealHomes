const mongoose = require('mongoose')
const Schema = mongoose.Schema


const HomeSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
        
    },
    website: {
        type: String
        
    }
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   }
})

  module.exports = mongoose.model("nursinghomes", new Schema({name: String, address: String, phoneNumber: String, website: String}), 'nursinghomes');