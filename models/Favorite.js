const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// Only need the user and the name of the nursing home they liked
const FavoriteSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
});

module.exports = mongoose.model('Favorite', FavoriteSchema)