import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

interface CustomInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  requireAuth?: boolean;
  isMovieApi?: boolean;
}

const API_TOKEN = import.meta.env.VITE_MOVIE_TOKEN;

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const movieClient = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 공통 인터셉터 로직
const addInterceptors = (instance: typeof client, isMovieApi = false) => {
  instance.interceptors.request.use(
    (config: CustomInternalAxiosRequestConfig) => {
      // 일반 API
      if (
        !isMovieApi &&
        config.requireAuth &&
        localStorage.getItem("accessToken")
      ) {
        const accessToken = localStorage.getItem("accessToken");
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      // 영화 API
      if (isMovieApi) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${API_TOKEN}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      console.log(error.response?.data || error.message);
      if (error.response) {
        console.error("Response error:", error.response.status);

        // 액세스 토큰 만료 시 로직 처리
        if (error.response.data.code === "TOKEN_003") {
          localStorage.clear();
          window.location.href = "/";
        }
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
      return Promise.reject(error);
    }
  );
};

// 인터셉터 추가
addInterceptors(client, false);
addInterceptors(movieClient, true);

// 일반 API 요청 함수
export const clientAuth = <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return client({
    ...config,
    requireAuth: true,
  } as CustomInternalAxiosRequestConfig);
};

// 영화 API 요청 함수
export const movieClientAuth = <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return movieClient({
    ...config,
  } as CustomInternalAxiosRequestConfig);
};
