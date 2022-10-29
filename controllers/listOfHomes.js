// This file is for the route to retrieve 
// the specific home that is clicked on
// meaning once the nursing home is clicked on the homepage
// this page will specify what to do with that kind of request
// from the user

const Dementia = require('../models/Homes')
const Favorite = require('../models/Favorite')

module.exports = {
    getMorningSide: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('morningside.ejs', {homes: data})
        }
      })
    },

    getBainbridge: async (req, res) => {
      try{
        const home = await Dementia.findById(req.params.id)
        res.render('bainbridge.ejs', { home: home, user: req.user})
      }catch (err){
        console.log(err)
      }
      // Dementia.find({}, function(err,data) {
      //   if (err){
      //     console.log(err)
      //   }else{
      //     res.render('bainbridge.ejs', {homes: data})
      //   }
      // })
    },

    getBeth: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('bethAbraham.ejs', {homes: data})
        }
      })
    },

    getBronxCenter: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('bronxCenter.ejs', {homes: data})
        }
      })
    },

    getEastchester: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('eastchesterRehab.ejs', {homes: data})
        }
      })
    },

    getGrandManor: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('grandManor.ejs', {homes: data})
        }
      })
    },

    getHudson: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('hudsonPointe.ejs', {homes: data})
        }
      })
    },

    getKingsHarbor: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('kingsHarbor.ejs', {homes: data})
        }
      })
    },

    getSplitRock: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('splitRock.ejs', {homes: data})
        }
      })
    },

    getStPatrick: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('stPatrick.ejs', {homes: data})
        }
      })
    },

    getUniversity: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('university.ejs', {homes: data})
        }
      })
    },

    getWilliamsbridge: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('williamsBridge.ejs', {homes: data})
        }
      })
    },

    getSavedHomes: async (req,res) => {
      console.log(req.user)
      try {
      //Since we have a session each request (req) contains the logged-in users info: req.user
      //console.log(req.user) to see everything
      //Grabbing just the posts of the logged-in user
        const homes = await Favorite.find({ user: req.user.id }).populate('favorites');

        console.log(homes)

      //Sending post data from mongodb and user data to ejs template
       res.render("favorites.ejs", { nHomes: homes, user: req.user });
      } catch (err) {
        console.log(err);
      }
      // try {
      //   const homes = await Dementia.find({ saves: req.user.id })
      //   res.render('favorite.ejs', { homes: homes, user: req.user})
      // }catch (err){
      //   console.log(err)
      },
      // console.log(req.user)
      // res.render('favorites.ejs')
      // try{
      //   const homes = await Favorite.find({ user: req.user.id }).populate('dementias')

      //   console.log(homes)

      //   //sending home data from mongodb and user data to ejs template
      //   res.render('favorites.ejs')
      // }catch(err){
      //   console.log(err)
      // }
      // , {names: homes , user: req.user}
    

    saveHome: async (req, res) => {
      try {
        await Favorite.create({
          user: req.user.id,
          home: req.params.id
        });

        console.log('Saved home has been added!')
        res.redirect(`/saveHome/`)
      }catch (err){
        console.log(err)
      }
      
      // let saved = false

      // try {
      //   let homes = await Dementia.findbyId({_id: req.params.id })
      //   saved = (homes.saves.includes(req.user.id))
      // }catch (err) {
      // }

      // if (saved) {
      //   try {
      //     await Dementia.findOneAndUpdate({_id:req.params.id}, 
      //       {
      //         $pull: {'saves': req.user.id}
      //       })

      //       console.log('Removed user from saved array')
      //       res.redirect('/home')
      //   }catch (err){
      //     console.log(err)
      //   }
      // }
      // // adds the user to the saves array created from the model
      // else{
      //   try{
      //     await Dementia.findOneAndUpdate({ _id: req.params.id},
      //       {
      //         $addToSet: {'saves': req.user.id}
      //       })

      //         console.log('Added user to bookmarks array')
      //         res.redirect('/home')
      //   }catch (err){
      //     console.log(err)
      //   }
      // }
    }
  
    // favoriteHome: async (req,res) => {
    //   try {
    //     let home = await Favorite.findbyId({_id: req.params.id})
    //     favorited = (home.)
    //   }
    //   try {
    //     await Favorite.create({
    //       user: req.user.id, // getting the name of the logged in user
    //       name: req.params.nameId, // getting the name of the nursing home
    //       website: req.params.websiteId  
    //     })
    //     console.log("A home has been added to your favorites!")
    //     console.log(req.params)
    //     res.redirect(`/home`)
    //   }catch (err){
    //     console.log(err)
    //   }
    // }



    
}
