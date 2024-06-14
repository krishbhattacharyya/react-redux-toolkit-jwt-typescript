import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"
import NavLinkAtom from "../../atoms/nav-link/nav-link-atom";

function Navigation({isLogin}:{isLogin:boolean}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>
          Navbar with text
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLogin ? (
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            ) : (
              <>
                <NavLinkAtom href={"/login"}>Login</NavLinkAtom>
                <NavLinkAtom href={"/signin"}>Signin</NavLinkAtom>
                <NavLinkAtom href={"/dashboard"}>Dashboard</NavLinkAtom>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
