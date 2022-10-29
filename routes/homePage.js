const express = require("express");
const router = express.Router();
const specificHomeController = require('../controllers/listOfHomes')
// const savedController = require('../controllers/listOfHomes')
// const morningController = require('../controller')
// const authController = require("../controllers/auth");
// const homeController = require("../controllers/home");
// const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// routes for the individual pages of nursing homes )
// router.get('/home', ensureAuth, specificHomeController.getMorningSide)

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

router.get('/:id', ensureAuth, specificHomeController.getSavedHomes)
router.post('/saveHome/:id', specificHomeController.saveHome)

// router.post('/addFavorite', specificHomeController.favoriteHome)


// route that connects each individual nursing home to the controller
// that will post the appropriate nursing home in the favorites collection
// router.post('/favoriteHome/:id', ensureAuth, savedController.favoriteHome)

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
