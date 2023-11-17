const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const { updateMood } = require("../controllers/moodControllers");

router.use(requireAuth)

router.patch("/", updateMood);

module.exports = router;
