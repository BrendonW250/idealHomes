const express = require("express");
const router = express.Router();
const specificHomeController = require('../controllers/listOfHomes')
// const morningController = require('../controller')
// const authController = require("../controllers/auth");
// const homeController = require("../controllers/home");
// const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// routes for the individual pages of nursing homes )
router.get('/home', ensureAuth, specificHomeController.getMorningSide)

router.get('/morningside', ensureAuth, specificHomeController.getMorningSide)


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
