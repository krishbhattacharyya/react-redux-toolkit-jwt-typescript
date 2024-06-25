import axios from "../../utils/axios-interceptors-utils"
import {API} from "../../settings/API"

export const getLoggedinUsers = async (emailId = "", password = "") => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    }
    const dataPost = {
      email: emailId,
      password: password
    }
    const response: any = await axios.post(
      API.LOGINUSER.URL,
      dataPost,
      {headers: headers}
    )
    const { data } = await response
    return { ok: true, data: data }
  } catch (err: any) {
    return Promise.reject(err.response.data.error)
  }
}

export const setSignUpUsers = async (emailId = "", password = "") => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    }
    const dataPost = {
      email: emailId,
      password: password
    }
    const response: any = await axios.post(
      API.SIGNUPUSER.URL,
      dataPost,
      {headers: headers}
    )
    const { data } = await response
    return { ok: true, data: data }
  } catch (err: any) {
    return Promise.reject(err.response.data.error)
  }
}

export const setLogOutUsers = async (emailId = "", password = "") => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response: any = await axios.get(
      API.LOGOUTUSER.URL,
      {headers: headers}
    )
    const { data } = await response
    return { ok: true, data: data }
  } catch (err: any) {
    return Promise.reject(err.response.data.error)
  }
}
