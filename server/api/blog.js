require("dotenv").config();

const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get("/blog", async function (req, res) {
    let query = req.query.query;
    
    let options = {
        headers: {
            "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
        },
        params: {
            query: query,
            display: 4,
        },
    };
    try {
        const blog = await axios.get(
            "https://openapi.naver.com/v1/search/blog.json",
            options
        );
        res.json(blog.data);
    } catch (err) {
        console.error(`Error:${err.message}`);
    }
});
module.exports = router;