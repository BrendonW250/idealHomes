// this page is the controller that connects the controller
// to each individual nursing home page

const Homes = require('../models/Homes') //connects to this file to the schema
// const Favorite = require('../models/Favorite') //connects to the favorites schema

module.exports = {
  // brings up the user's profile page
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
      },

      // getFavorites: async (req, res) => {
      //   Favorite.find({}, function(err,data) {
      //     if (err){
      //       console.log(err)
      //     }else{
      //       res.render('favorites.ejs', {homes: data})
      //     }
      //   })
      // }

      // getFavorites: async (req,res) => {
      //   console.log(req.user)
      //   try{
      //     const homes = await Favorite.find({ user: req.user.id }).populate('dementias')

      //     console.log(homes)

      //     //sending home data from mongodb and user data to ejs template
      //     res.render('favorites.ejs', {names: homes , user: req.user})
      //   }catch(err){
      //     console.log(err)
      //   }
      // },

      // favoriteHome: async (req,res) => {
      //   try {
      //     await Favorite.create({
      //       user: req.user.id, // getting the name of the logged in user
      //       name: req.params.id // getting the name of the nursing home
      //     })
      //     console.log("A favorite has been added!")
      //     res.redirect(`/homes/${req.params.id}`)
      //   }catch (err){
      //     console.log(err)
      //   }
      // }
    }
