import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import UserContext from '../context/UserContext';



const LoginRegisterNav = () => {
  const { user } = useContext(UserContext);



  return (



    <div>
      <Navbar expand="sm" bg="light" variant="light">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
              <>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/cart">Cart({user.cart?.totalItems || 0})</Nav.Link>
              </>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      

    </div>



  )


}



export default LoginRegisterNav