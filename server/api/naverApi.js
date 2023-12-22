require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/search', async (req, res) => {
    try {
        const { query, display } = req.query;
        console.log('Received query:', query);
        console.log('Received display:', display);

        const response = await axios.get('https://openapi.naver.com/v1/search/local.json', {
            params: {
                query,
                display,
            },S
            headers: {
                'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
                'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error:', error); 
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/search/image', async (req, res) => {
    try {
        const { query, display } = req.query;
        console.log('Received query:', query);
        console.log('Received display:', display);

        const response = await axios.get('https://openapi.naver.com/v1/search/local.json', {
            params: {
                query,
                display,
            },
            headers: {
                'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
                'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error:', error); 
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
