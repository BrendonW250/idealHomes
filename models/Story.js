const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// Only need the user and the name of the nursing home they liked
const StorySchema = new mongoose.Schema({

    story: {
        type: String
    },
    likes: {
      type: Number,
      required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
});

module.exports = mongoose.model('Story', StorySchema)