import axios from "../../utils/axios-interceptors-utils"
import { API } from "../../settings/API"

export const getAllProducts = async (emailId = "", password = "") => {
  try {
    const headers = {
      "Content-Type": "application/json",
    }
    const response: any = await axios.get(API.FETCHALLPRODUCTS.URL, {
      headers: headers,
    })
    const { data } = await response
    return { ok: true, data: data }
  } catch (err: any) {
    return Promise.reject(err.response.data.error)
  }
}
