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
    const response = await axiosLocal.get("/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("유저 데이터:", response.data); // 로그로 확인
    return response.data;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
    throw error; // 에러를 throw하여 호출 부분에서 catch로 잡히게 함
  }
};

export { axiosInstance, axiosLocal, postSignIn, postLogin, getUser };
