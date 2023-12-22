const naverApi = require("../api/naverApi");

const express = require("express");
const router = express.Router();

router.get("/searchNaverApi", async (req, res) => {
  try {
    const query = req.query.query;
    const display = req.query.display || 5;

    const result = await naverApi.searchNaverApi(query, display);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
