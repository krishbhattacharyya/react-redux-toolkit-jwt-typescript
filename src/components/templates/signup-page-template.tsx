import { useAppDispatch, useAppSelector } from "../../reduxutils/hooks"
import { Navigate } from "react-router-dom"
import {
  selectSignUpUser,
  selectSignUpError,
  selectAuthLoading,
  selectUserLoggedIn,
  signUpAsync,
} from "../../reduxfeatures/auth/authSlice"
import Navigation from "../organisms/navigation/navigation"
import UserPasswordForm from "../organisms/userpasswordform/userPasswordForm"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function SignupPageTemplate({
  heading,
  subHeading,
}: {
  heading: string
  subHeading: string
}) {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectAuthLoading)
  const user = useAppSelector(selectSignUpUser)
  const isError = useAppSelector(selectSignUpError)
  const isLoggedIn = useAppSelector(selectUserLoggedIn)

  function formSubmitted(e: React.SyntheticEvent) {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }
    const emailId = target.email.value
    const password = target.password.value
    dispatch(signUpAsync({ emailId, password }))
  }

  return (
    <>
      <Navigation isLogin={isLoggedIn} user={null} />
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
              submitButton={"Signup"}
              formSubmitted={formSubmitted}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {isError ? isError : null}
            {isLoading ? "...loading" : null}
            {user ? (user?.firsname || user?.email) : null}
          </Col>
        </Row>
      </Container>
    </>
  )
}
