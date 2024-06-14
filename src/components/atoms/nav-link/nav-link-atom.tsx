import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

interface NavLinkType {
  children: React.ReactNode
  href: string
}

export default function NavLinkAtom({ children, href }: NavLinkType) {
  return (
    <>
      <Nav.Link as={NavLink} to={href}>
        {children}
      </Nav.Link>
    </>
  )
}
