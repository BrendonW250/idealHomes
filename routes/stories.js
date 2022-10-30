const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const storyController = require("../controllers/story");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, storyController.getStory);

router.post("/createPost", upload.single("file"), storyController.createPost);

router.put("/likePost/:id", storyController.likePost);

router.delete("/deletePost/:id", storyController.deletePost);

module.exports = router;
