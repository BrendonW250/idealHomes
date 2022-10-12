const mongoose = require('mongoose')
// const Schema = mongoose.Schema


const HomeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        unique: true
    },
    phoneNumber: {
        type: String,
        unique: true
        
    },
    website: {
        type: String,
        unique: true
        
    }
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   }
});

//creating the collection
const collections = mongoose.model('Dementia', HomeSchema)

// inserting a document into db
collections.create({
    name: 'Morningside Nursing & Rehabilitation',
    address: '1000 Pelham Parkway S, Bronx, NY 10461',
    phoneNumber: '718-409-2800',
    website: 'morningsidenrc.com'
})
.then((ans) => {
    console.log('document inserted')
})
.catch((err) => {
    console.log(err)
})

module.exports = collections