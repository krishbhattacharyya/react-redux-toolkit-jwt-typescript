import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function DashboardPageTemplate({heading, image, subHeading}:{heading:string,image:string, subHeading:string}) {
  return (
    <>
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
