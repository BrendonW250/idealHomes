// this page is the controller that connects the controller
// to each individual nursing home page

const Homes = require('../models/Homes') //connects to this file to the schema

module.exports = {
    getProfile: async (req, res) => {
      try {
        const homes = await Homes.find({ user: req.user.id });
        res.render("profile.ejs", { homes: homes, user: req.user });
      } catch (err) {
        console.log(err);
      }
    },
    getHomes: async (req, res) => {
        try{
          const homes = await Homes.findById(req.params.id)
          res.render('home.ejs', { homes: homes, user: req.user })
        }catch (err){
          console.log(err)
        }
      }
    }
