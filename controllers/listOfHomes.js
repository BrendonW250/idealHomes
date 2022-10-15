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
    },

    getBainbridge: async (req, res) => {
      Dementia.find({}, function(err,data) {
        if (err){
          console.log(err)
        }else{
          res.render('bainbridge.ejs', {homes: data})
        }
      })
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
    }



    
}
