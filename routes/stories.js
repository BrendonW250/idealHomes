const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const storyController = require("../controllers/story");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, storyController.getStory);

router.post("/createStory", upload.single("file"), storyController.createStory);

router.put("/likeStory/:id", storyController.likeStory);

router.delete("/deleteStory/:id", storyController.deleteStory);

module.exports = router;
