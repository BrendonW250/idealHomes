const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
// const postsController = require("../controllers/posts");
const specificHomeController = require('../controllers/listOfHomes');
const nursingHomesController = require('../controllers/eachHome');
const storyController = require('../controllers/story')
const savedController = require('../controllers/listOfHomes')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, storyController.getProfile);
router.get("/feed", ensureAuth, storyController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get('/home', ensureAuth, nursingHomesController.getHomes)
// router.get('/saved', ensureAuth, savedController.getSavedHomes)



router.get('/morningside', ensureAuth, specificHomeController.getMorningSide)
router.get('/bainbridge', ensureAuth, specificHomeController.getBainbridge)
router.get('/bethAbraham', ensureAuth, specificHomeController.getBeth)
router.get('/kingsharbor', ensureAuth, specificHomeController.getKingsHarbor)
router.get('/eastchesterrehab', ensureAuth, specificHomeController.getEastchester)
router.get('/universitynursing', ensureAuth, specificHomeController.getUniversity)
router.get('/stpatrickshome', ensureAuth, specificHomeController.getStPatrick)
router.get('/williamsbridge', ensureAuth, specificHomeController.getWilliamsbridge)
router.get('/grandmanor', ensureAuth, specificHomeController.getGrandManor)
router.get('/splitrock', ensureAuth, specificHomeController.getSplitRock)
router.get('/hudsonpointe', ensureAuth, specificHomeController.getHudson)
router.get('/bronxcenter', ensureAuth, specificHomeController.getBronxCenter)




module.exports = router;
