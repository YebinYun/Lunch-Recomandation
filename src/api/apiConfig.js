import axios from "axios";

const BASE_URL = "/v1";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
    },
});

export default instance;
