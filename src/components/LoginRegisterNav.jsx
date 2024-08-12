import React, { useContext } from 'react'
import { Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap'
import UserContext from '../context/UserContext';




const LoginRegisterNav = () => {
  const { user } = useContext(UserContext);



  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    alert('You have been logged out');
    navigate('/');
};





  return (



    <div>
      <Navbar expand="sm" bg="light" variant="light">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
              <>
              <Nav.Link href="/products">Products</Nav.Link>
              
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="/" onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/cart">
                Cart <Badge variant="secondary">{user?.cart?.length}</Badge>
              </Nav.Link>
              </>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      

    </div>



  )


}



export default LoginRegisterNav