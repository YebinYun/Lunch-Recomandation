const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const naverApi = require('./api/naverApi');

const app = express();

app.use(cors());

// 서버 응답에 CORS 헤더 추가
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => {
    res.send('Hello, this is the root route!');
});
app.use('/api', routes);
app.use('/naver', naverApi);

const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

/**
 * 포트를 정규화합니다.
 * @param {string} val - 포트 값
 * @returns {number|string|boolean} - 정규화된 포트
 */
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}
