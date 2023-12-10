import axios from "axios";

const BASE_URL = "https://openapi.naver.com/v1";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
  },
  withCredentials: true,
});

export default instance;
