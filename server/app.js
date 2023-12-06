const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// CORS 미들웨어 추가
const corsOptions = {
    origin: 'http://localhost:3000', // 허용하고자 하는 도메인
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // 인증 정보를 함께 보낼 경우 true로 설정
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
