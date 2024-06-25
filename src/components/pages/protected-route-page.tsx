import { useAppDispatch, useAppSelector } from "../../reduxutils/hooks"
import {
  selectUserLoggedIn,
  resetUser,
} from "../../reduxfeatures/auth/authSlice"
import { Outlet, Navigate } from "react-router-dom"
import useLocalStorage from "../../hooks/use-local-storage"

export default function ProtectedRoute() {
  const { getStorage } = useLocalStorage()
  const dispatch = useAppDispatch()
  const ifJwt = getStorage("accesstoken")
  const isLoggedIn = useAppSelector(selectUserLoggedIn)
  if (!ifJwt || ifJwt === undefined) {
    if (isLoggedIn) {
      dispatch(resetUser())
    }
    return <Navigate to="/login" />
  }
  return (
    <>
      <Outlet />
    </>
  )
}
