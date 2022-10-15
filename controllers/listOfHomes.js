// This file is for the route to retrieve 
// the specific home that is clicked on
// meaning once the nursing home is clicked on the homepage
// this page will specify what to do with that kind of request
// from the user

const Dementia = require('../models/Homes')

module.exports = {
    getMorningSide: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('morningside.ejs', {homes: data})
        }
      })
   
      // const morning = Dementia.findOne({name: 'Morningside Nursing & Rehabilitation'})
      // console.log(morning)
          // .then(results => {
          //   res.render('morningside.ejs', {homes: morning})
          // })
          // .catch(error => console.error(error))
    }
}
// function saveHome(home){
//   const n = new Dementia(home)
//   return n.save()
// }

// saveHome({
//   name: "Morningside Nursing & Rehabilitation",
//   address: '1000 Pelham Parkway S, Bronx, NY 10461',
//   phoneNumber: '718-409-2800',
//   website: 'morningsidenrc.com'
// })
//   .then(doc => {console.log(doc)})
//   .catch(error => {console.error(error)})
// const morningside = new Dementia({
//   name: "Morningside Nursing & Rehabilitation",
//   address: '1000 Pelham Parkway S, Bronx, NY 10461',
//   phoneNumber: '718-409-2800',
//   website: 'morningsidenrc.com'
// })

// // hopefully saving this object to the db
// morningside.save(function(error, document) {
//   if (error) console.error(error)
//   console.log(document)
// })

// module.exports = {
//     getMorningSide: async (req, res) => {
//       // console.log(req.user)
//         Finally.find()
//         .then((result) => {
//           res.render('morningside.ejs', {names: result})
//         })
//         .catch(error => console.error(error))
//     }
// }
        // res.render('morningside.ejs', {name: found})
        // look into the collection, and find the document that is associated
        // with Morningside Nursing home
        // const home = req.body
        // const foundHome = await Finally.find({ name: home})
        // const findMorning = await HomeFormat.find({name: homeName})
        // const findMorning = await Homes.find({name: req.name})
        // find the address associated with morningside
        // const findAddy = await Homes.find({address: req.address})
        // // find phoneNumber associated with morningside
        // const findPhone = await Homes.find({phoneNumber: req.phoneNumber})
        // // find website associated with morningside
        // const findWeb = await Homes.find({website: req.website})
        // render the information alongside the name of the nursing home
        
        // res.render('morningside.ejs', {name: findMorning, address: findAddy, phoneNumber: findPhone, website: findWeb })
      
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