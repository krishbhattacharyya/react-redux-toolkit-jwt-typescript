import { useAppSelector } from "../../reduxutils/hooks"
import { selectAuthUser, selectUserLoggedIn } from "../../reduxfeatures/auth/authSlice"
import Navigation from "../organisms/navigation/navigation"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function HomePageTemplate({
  heading,
  image,
  subHeading,
}: {
  heading: string
  image: string
  subHeading: string
}) {
  const user = useAppSelector(selectAuthUser)
  const isLoggedIn = useAppSelector(selectUserLoggedIn)

  return (
    <>
      <Navigation isLogin={isLoggedIn} user={user} />
      <Container>
        <Row>
          <Col>{heading}</Col>
        </Row>
        <Row>
          <Col>
            <img alt="" src={image} loading="lazy" />
          </Col>
          <Col>{subHeading}</Col>
        </Row>
      </Container>
    </>
  )
}
