export const API = {
  SETCOOKIES: {
    URL: import.meta.env.VITE_API_BASE_URL + "setcookies",
    METHOD: "GET",
    MODULE:'EXPERIMENTAL',
    PURPOSE: "Testing purpose cookie is working or not"
  },
  READCOOKIES: {
    URL: import.meta.env.VITE_API_BASE_URL + "readcookies",
    METHOD: "GET",
    MODULE:'EXPERIMENTAL',
    PURPOSE: "Testing purpose cookie is working or not"
  },
  SIGNUPUSER: {
    URL: import.meta.env.VITE_API_BASE_URL + "auth/signup",
    METHOD: "POST",
    MODULE:'USER',
    PURPOSE: "User signup with email and password"
  },
  LOGINUSER: {
    URL: import.meta.env.VITE_API_BASE_URL + "auth/login",
    METHOD: "POST",
    MODULE:'USER',
    PURPOSE: "User login with email and password"
  },
  LOGOUTUSER: {
    URL: import.meta.env.VITE_API_BASE_URL + "auth/logout",
    METHOD: "GET",
    MODULE:'USER',
    PURPOSE: "User logout destroying jwt"
  },
  REFRESHTOKEN: {
    URL: import.meta.env.VITE_API_BASE_URL + "auth/refreshtoken",
    METHOD: "GET",
    MODULE:'USER',
    PURPOSE: "Generate refreshtoken and replace with accesstoken"
  },
  FETCHALLPRODUCTS: {
    URL: import.meta.env.VITE_API_BASE_URL + "product/getallproducts",
    METHOD: "GET",
    MODULE:'USER',
    PURPOSE: "Fetch all products"
  }
}
