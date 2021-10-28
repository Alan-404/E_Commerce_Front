import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {LOCAL} from '../../common/contants'
import {Link} from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import { AuthContext } from '../../contexts/AuthContext'
import {useContext } from 'react'

const NavBarMenu = () => {

  const {
    authState: {username},
    logoutAccount
  } = useContext(AuthContext)
  let infoAuth;


  

  if (localStorage[LOCAL])
  {
    infoAuth  = (
      <>
        <p className = "text-light hello">Xin Chào, {username}</p>
        <DropdownButton id="dropdown-basic-button">
          <Dropdown.Item href="#/action-1"><Button onClick= {logoutAccount} className = "bg-tranparent">Log out</Button></Dropdown.Item>
        </DropdownButton>
      </>
    )
  }
  else {
    infoAuth = (
      <div>
        <Link className = "mr-0 text-light sm" to = "/login">Login / </Link>
        <Link className = "text-light sm" to = "/register">Register</Link>
      </div>
    )
  }

    return (
        <div>
            <Navbar bg="info" expand="dark" className = "text-primary d-flex">
            <Container>
              <Navbar.Brand href="/welcome" className = "d-flex">
                <Col xs={6} md={4}>
                  <Image className = "myLogo" src="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png" roundedCircle />
                </Col>
                <p className = "mt-3 text-uppercase text-light">Shopping House</p>
              </Navbar.Brand>
              <InputGroup className="mt-1 w-50">
                <FormControl
                  placeholder="Search..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="success" id="button-addon2">
                  Tìm kiếm
                </Button>
              </InputGroup>
              {infoAuth}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}

export default NavBarMenu
