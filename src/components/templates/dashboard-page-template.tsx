
import { useAppSelector } from "../../reduxutils/hooks"
import { Navigate } from "react-router-dom"
import { selectAuthUser, selectUserLoggedIn } from "../../reduxfeatures/auth/authSlice"
import Container from "react-bootstrap/Container"
import Navigation from "../organisms/navigation/navigation"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function DashboardPageTemplate({heading, image, subHeading}:{heading:string,image:string, subHeading:string}) {
  const user = useAppSelector(selectAuthUser)
  const isLoggedIn = useAppSelector(selectUserLoggedIn)

  /*if(!isLoggedIn){
    return(
      <Navigate to="/login" />
    )
  }*/

  return (
    <>
      <Navigation isLogin={isLoggedIn} user={user} />
      <Container>
        <Row>
          <Col>{heading}</Col>
        </Row>
        <Row>
          <Col>{image}</Col>
          <Col>{subHeading}</Col>
        </Row>
      </Container>
    </>
  )
}
