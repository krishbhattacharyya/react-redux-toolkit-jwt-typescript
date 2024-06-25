import { useAppDispatch, useAppSelector } from "../../reduxutils/hooks"
import { Navigate } from "react-router-dom"
import {
  selectAuthUser,
  selectAuthError,
  selectAuthLoading,
  selectAuthToken,
  selectRefreshToken,
  logInAsync,
  selectUserLoggedIn,
} from "../../reduxfeatures/auth/authSlice"
import Navigation from "../organisms/navigation/navigation"
import UserPasswordForm from "../organisms/userpasswordform/userPasswordForm"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import useLocalStorage from "../../hooks/use-local-storage";

export default function LoginPageTemplate({
  heading,
  subHeading,
}: {
  heading: string
  subHeading: string
}) {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectAuthLoading)
  const user = useAppSelector(selectAuthUser)
  const isError = useAppSelector(selectAuthError)
  const isLoggedIn = useAppSelector(selectUserLoggedIn)
  const authToken = useAppSelector(selectAuthToken)
  const refreshToken = useAppSelector(selectRefreshToken)
  const { setStorage } = useLocalStorage();

  function formSubmitted(e: React.SyntheticEvent) {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }
    const emailId = target.email.value
    const password = target.password.value
    dispatch(logInAsync({ emailId, password }))
  }


  if (isLoggedIn) {
    setStorage("refreshtoken", refreshToken)
    setStorage("accesstoken", authToken)
    return <Navigate to="/dashboard" />
  }
  return (
    <>
      <Navigation isLogin={isLoggedIn} user={user} />
      <Container>
        <Row>
          <Col>
            <h2>{heading}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>{subHeading}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <UserPasswordForm
              submitButton={"Login"}
              formSubmitted={formSubmitted}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {isError ? isError : null}
            {isLoading ? "...loading" : null}
          </Col>
        </Row>
      </Container>
    </>
  )
}
