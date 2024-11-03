import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

const axiosLocal = axios.create({
  baseURL: "http://localhost:3000",
});

// 회원가입 함수
const postSignIn = async (email, password, passwordCheck) => {
  try {
    const response = await axiosLocal.post("/auth/register", {
      email,
      password,
      passwordCheck,
    });
    return response.data;
  } catch (error) {
    console.error("회원가입 실패:", error.response?.data || error.message);
    throw error;
  }
};

//로그인 함수
const postLogin = async (email, password) => {
  try {
    const response = await axiosLocal.post("/auth/login", {
      email,
      password,
    });

    const { accessToken, refreshToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return response.data;
  } catch (error) {
    console.error("로그인:", error.response?.data || error.message);
    throw error;
  }
};

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

//유저정보가져오기
const getUser = async () => {
  try {
    const accessToken = getAccessToken();
    const response = await axios.get("/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
  }
};

export { axiosInstance, axiosLocal, postSignIn, postLogin, getUser };
