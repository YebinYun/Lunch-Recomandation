const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const naverApi = require('./api/naverApi');

const app = express();

// 미들웨어를 통한 CORS 설정
app.use(cors());

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
