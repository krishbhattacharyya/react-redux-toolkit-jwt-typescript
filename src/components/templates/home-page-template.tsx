import Navigation from "../molecules/navigation/navigation"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function HomePageTemplate({heading, image, subHeading}:{heading:string,image:string, subHeading:string}) {
  return (
    <>
      <Navigation isLogin={false} />
      <Container>
        <Row>
          <Col>{heading}</Col>
        </Row>
        <Row>
          <Col><img alt="" src={image} loading="lazy"/></Col>
          <Col>{subHeading}</Col>
        </Row>
      </Container>
    </>
  )
}
