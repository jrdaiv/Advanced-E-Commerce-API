import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap'




const LoginRegisterNav = () => {



  return (



    <div>
      <Navbar expand="sm" bg="light" variant="light">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      

    </div>



  )


}



export default LoginRegisterNav