import axios from "axios";

const BASE_URL = "https://openapi.naver.com/v1";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    X_Naver_Client_Id: process.env.REACT_APP_NAVER_CLIENT_ID,
    X_Naver_Client_Secret: process.env.REACT_APP_NAVER_CLIENT_SECRET,
  },
  withCredentials: true,
});

export default instance;
