// This file is for the route to retrieve 
// the specific home that is clicked on
// meaning once the nursing home is clicked on the homepage
// this page will specify what to do with that kind of request
// from the user

const Homes = require('../models/Homes')

module.exports = {
    getMorningSide: async (req, res) => {
      console.log(req.user)
      try{
        // look into the collection, and find the document that is associated
        // with Morningside Nursing home
        const findMorning = await Homes.find({name: req.name})
        // find the address associated with morningside
        const findAddy = await Homes.find({address: req.address})
        // find phoneNumber associated with morningside
        const findPhone = await Homes.find({phoneNumber: req.phoneNumber})
        // find website associated with morningside
        const findWeb = await Homes.find({website: req.website})
        // render the information alongside the name of the nursing home
        res.render('morningside.ejs', {name: findMorning, address: findAddy, phoneNumber: findPhone, website: findWeb })
      }catch(err){
        console.log(err)
      }
      // let findHome = await Homes.find().toArray()
      // let res = await fetch(res.render('morningside.ejs'))
      // console.log(res)
      // res.render('morningside.ejs', {})
        // try {
        //   const morning = await Homes.findById(req.params.id); //This is the method I would use to get the id of the home the user liked I THINK*****
        //   res.render("morningside.ejs", { name: morning, address: req.address });
        // } catch (err) {
        //   console.log(err);
        // }
      },
}

// module.exports = {
//     getMorningSide: async (req,res) => {
//         try{
//             const morningsideItems = await Homes.find().toArray()
//                 .then(resuls => {
//                     res.render('morningside.ejs', {homes: results})
//                 })
//                 .catch(error => console.error(error))
//         }
//     }
// }