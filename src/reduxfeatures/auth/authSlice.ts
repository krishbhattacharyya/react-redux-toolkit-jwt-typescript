import { createAppSlice } from "../../reduxutils/createAppSlice"
import { getLoggedinUsers, setSignUpUsers, setLogOutUsers } from "./authAPI"
import { PURGE } from "redux-persist";

export interface authSliceState<Data, DataS> {
  loading: boolean
  userInfo: Data
  userAccessToken: string
  userRefreshToken: string
  userLoggedIn: boolean
  loggedInError: string | null
  success: boolean
  status: "idle" | "loading" | "failed"
  errorSignUp: string | null
  statusSignUp: "idle" | "loading" | "failed"
  userSignUpInfo: DataS
  successSignUp: boolean
  successLogOut: boolean
}

const initialState: authSliceState<{}, { firsname?: string; email?: string }> =
  {
    loading: false,
    userInfo: {}, // for user object
    userAccessToken: '',
    userRefreshToken: '',
    userLoggedIn: false, // for storing the JWT
    loggedInError: null,
    errorSignUp: null,
    success: false, // for monitoring the auth login process.
    status: "idle",
    statusSignUp: "idle",
    userSignUpInfo: {},
    successSignUp: false, // for monitoring the registration process.,
    successLogOut: false,
  }

// If you are not using async thunks you can use the standalone `createSlice`.
export const authSlice = createAppSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    logInAsync: create.asyncThunk(
      async (
        { emailId, password }: { emailId: string; password: string },
        { rejectWithValue },
      ) => {
        try {
          const response: any = await getLoggedinUsers(emailId, password)
          return response.data
        } catch (err: any) {
          throw new Error(err)
        }
      },
      {
        pending: state => {
          state.loading = true
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.success = true
          state.loading = false
          state.status = "idle"
          state.userLoggedIn = true
          state.loggedInError = null
          state.userInfo = action.payload.user
          state.userAccessToken = action.payload.accessToken
          state.userRefreshToken = action.payload.refreshToken
        },
        rejected: (state: any, action: any) => {
          state.success = false
          state.loading = false
          state.status = "failed"
          state.loggedInError = //
            action && action.error && action.error.message
              ? action.error.message
              : "Please try once again! It looks like the the request rejected!"
        },
      },
    ),
    signUpAsync: create.asyncThunk(
      async (
        { emailId, password }: { emailId: string; password: string },
        { rejectWithValue },
      ) => {
        try {
          const response: any = await setSignUpUsers(emailId, password)
          return response.data
        } catch (err: any) {
          throw new Error(err)
        }
      },
      {
        pending: state => {
          state.loading = true
          state.statusSignUp = "loading"
        },
        fulfilled: (state, action) => {
          state.successSignUp = true
          state.loading = false
          state.statusSignUp = "idle"
          state.errorSignUp = null
          state.userSignUpInfo = action.payload
        },
        rejected: (state: any, action: any) => {
          state.successSignUp = false
          state.loading = false
          state.statusSignUp = "failed"
          state.errorSignUp =
            action && action.error && action.error.message
              ? action.error.message
              : "Please try once again! It looks like the the request rejected!"
        },
      },
    ),
    logOutAsync: create.asyncThunk(
      async () => {
        try {
          const response: any = await setLogOutUsers()
          return response.data
        } catch (err: any) {
          throw new Error(err)
        }
      },
      {
        pending: state => {
          state.loading = true
          state.statusSignUp = "loading"
        },
        fulfilled: state => {
          state.successLogOut = true
          state.userLoggedIn = false
          state.userInfo = {}
          state.loading = false
          state.statusSignUp = "idle"
          state.errorSignUp = null
        },
        rejected: (state: any, action: any) => {
          state.successSignUp = false
          state.loading = false
          state.statusSignUp = "failed"
          state.errorSignUp =
            action && action.error && action.error.message
              ? action.error.message
              : "Please try once again! It looks like the the request rejected!"
        },
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state, action) => {
      return initialState
    })
  },
  selectors: {
    selectAuthUser: auth => auth.userInfo,
    selectAuthStatus: auth => auth.status,
    selectAuthToken: auth => auth.userAccessToken,
    selectRefreshToken: auth => auth.userRefreshToken,
    selectAuthLoading: auth => auth.loading,
    selectAuthError: auth => auth.loggedInError,
    selectAuthSuccess: auth => auth.success,
    selectSignUpUser: auth => auth.userSignUpInfo,
    selectSignUpError: auth => auth.errorSignUp,
    selectSignUpSuccess: auth => auth.successSignUp,
    selectUserLoggedIn: auth => auth.userLoggedIn,
    selectSuccessLogOut: auth => auth.successLogOut,
  },
})

// Action creators are generated for each case reducer function.
export const { logInAsync, signUpAsync, logOutAsync } =
  authSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
  selectAuthUser,
  selectAuthStatus,
  selectAuthToken,
  selectRefreshToken,
  selectAuthLoading,
  selectAuthError,
  selectAuthSuccess,
  selectSignUpUser,
  selectSignUpError,
  selectSignUpSuccess,
  selectUserLoggedIn,
  selectSuccessLogOut,
} = authSlice.selectors
