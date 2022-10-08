const express = require("express");
const router = express.Router();
const getSpecificController = require('../controllers/individualHomes')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// routes for the individual pages of nursing homes )
router.get('/home', ensureAuth, nursingHomesController.getHomes)

router.get('/individual', ensureAuth, getSpecificController.getMorningSide)


//Main Routes - simplified for now
// router.get("/", homeController.getIndex);
// router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/feed", ensureAuth, postsController.getFeed);
// router.get("/login", authController.getLogin);
// router.post("/login", authController.postLogin);
// router.get("/logout", authController.logout);
// router.get("/signup", authController.getSignup);
// router.post("/signup", authController.postSignup);
 
module.exports = router;
