import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import { NavLink } from "react-router-dom"
import { useAppDispatch } from "../../../reduxutils/hooks"
import { logOutAsync } from "../../../reduxfeatures/auth/authSlice"
import {
  clearLocalStorage,
} from "../../../utils/local-storage"

import {persistor} from '../../../reduxutils/store'


import NavLinkAtom from "../../atoms/nav-link/nav-link-atom"

function Navigation({ isLogin, user }: { isLogin: boolean; user: any }) {
  const dispatch = useAppDispatch()
  function logOut() {
    persistor.purge();
    clearLocalStorage()
    //dispatch(logOutAsync())
  }
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
              <>
                <Navbar.Text>
                  Signed in as: <b>{JSON.stringify(user)}</b>
                </Navbar.Text>
                <NavLinkAtom href={"/dashboard"}>Dashboard</NavLinkAtom>
                <NavLinkAtom href={"/product"}>Product</NavLinkAtom>
                <Button variant="primary" onClick={logOut}>
                  Logout
                </Button>{" "}
              </>
            ) : (
              <>
                <NavLinkAtom href={"/login"}>Login</NavLinkAtom>
                <NavLinkAtom href={"/product"}>Product</NavLinkAtom>
                <NavLinkAtom href={"/signup"}>Signup</NavLinkAtom>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
