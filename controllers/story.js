// const cloudinary = require("../middleware/cloudinary");
// const Post = require("../models/Post");
const Story = require('../models/Story')


module.exports = {
  getProfile: async (req, res) => {
    try {
      const stories = await Story.find({ user: req.user.id });
      res.render("profile.ejs", { stories: stories, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  // creating a timeline of posts created by users in 
  // chronological order
  getFeed: async (req, res) => {
    try {
      // const feed = await Story.find({user: req.user.id}).populate('user')
      const stories = await Story.find().populate('user').sort({ createdAt: "desc" }).lean();
      

      console.log(stories)

      res.render("feed.ejs", { stories: stories});

      
    } catch (err) {
      console.log(err);
    }
  },
  // getting the homes that the user liked
  
  getStory: async (req, res) => {
    try {
      const story = await Story.findById(req.params.id).populate('user'); //This is the method I would use to get the id of the home the user liked I THINK*****

      console.log(story)
      res.render("story.ejs", { story: story, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createStory: async (req, res) => {
    try {
      await Story.create({
        story: req.body.story,
        user: req.user.id,
        // title: req.body.title,
        // image: result.secure_url,
        // cloudinaryId: result.public_id,
        // caption: req.body.caption,
        likes: 0
        
      });
      console.log("Story has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likeStory: async (req, res) => {
    try {
      await Story.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/story/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteStory: async (req, res) => {
    try {
      // Find post by id
      let post = await Story.findById({ _id: req.params.id });
      // Delete post from db
      await Story.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
