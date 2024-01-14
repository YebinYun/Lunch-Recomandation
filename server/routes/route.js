const express = require("express");
const router = express.Router();

const blogApi = require("../api/blog");
const searchApi = require("../api/search");
const imageApi = require("../api/image");

router.get("/blog", blogApi);
router.get("/search", searchApi);
router.get("/image", imageApi);

module.exports = router;