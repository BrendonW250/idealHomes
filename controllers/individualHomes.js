// This file is for the route to retrieve 
// the specific home that is clicked on
// meaning once the nursing home is clicked on the homepage
// this page will specify what to do with that kind of request
// from the user

const Homes = require('../models/homesInfo/homeData/homeData')

module.exports = {
    getMorningSide: async (req, res) => {
        try {
          const morning = await Homes.findById(req.params.id); //This is the method I would use to get the id of the home the user liked I THINK*****
          res.render("morningside.ejs", { name: morning, address: req.address });
        } catch (err) {
          console.log(err);
        }
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