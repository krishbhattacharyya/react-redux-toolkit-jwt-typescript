import { useAppSelector } from "../../reduxutils/hooks"
import {
  selectUserLoggedIn
} from "../../reduxfeatures/auth/authSlice"
import { Outlet, Navigate } from "react-router-dom"

export default function ProtectedRoute() {
  const isLoggedIn = useAppSelector(selectUserLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }
  return (
    <>
      <Outlet />
    </>
  )
}
