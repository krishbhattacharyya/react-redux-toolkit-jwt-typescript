import axiosinstance from "axios"
import { API } from "../settings/API"

const axios = axiosinstance.create()

async function refreshToken() {
  try {
    const headers = {
      "Content-Type": "application/json",
    }
    const refreshToken = localStorage.getItem("refreshtoken")
      ? JSON.parse(localStorage.getItem("refreshtoken") || "")
      : ""
    const dataPost = {
      token: refreshToken,
    }
    const response: any = await axiosinstance.post(
      API.REFRESHTOKEN.URL,
      dataPost,
      {
        headers: headers,
      },
    )
    const { data } = await response
    const { accessToken } = data
    return accessToken
  } catch (err) {
    throw new Error("Token not generated")
  }
}

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.withCredentials = true
    const token = localStorage.getItem("accesstoken")
      ? JSON.parse(localStorage.getItem("accesstoken") || "")
      : ""
    if (token) {
      config.headers["authorization"] = "Bearer " + token
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  async function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status === 401) {
      const originalRequest = error.config
      try {
        const getConfigWithRefreshToken = await refreshToken()
        localStorage.setItem(
          "accesstoken",
          JSON.stringify(getConfigWithRefreshToken),
        )
        return axios(originalRequest)
      } catch (err) {
        throw new Error("Problem to generate aceess token")
      }
    }
    // Do something with response error
    return Promise.reject(error)
  },
)

export default axios
