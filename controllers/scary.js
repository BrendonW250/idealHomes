// Controller to set instructions of the user's story that 
// they want to share

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

    getStory: async (req, res) => {
        try {
          const story = await Story.findById(req.params.id); //This is the method I would use to get the id of the home the user liked I THINK*****
          res.render("story.ejs", { story: story, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },

    


}