import React, { useContext, useState } from 'react';
import { Navbar, Nav, Button, Offcanvas, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserContext  from '../context/UserContext';
// import Login from './Login';
import Products from './Products';
import Footer from './Footer';


const NavBar = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');


    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const handleLogin =  (e) => {
        e.preventDefault();

        const currentUser = {
            name: userName,
            email: email,
            password: password,
            isLoggedIn: true,

            

        }
        sessionStorage.setItem('user', JSON.stringify(currentUser));
        setUser(currentUser);
        alert('Login Successfully');
        navigate('/products');
    }
    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = {
            name: userName,
            email: email,
            password: password,
            isLoggedIn: true,


        }
        sessionStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
        alert('Registered Successfully');
        navigate('/products');
    }
    




  return (


    <div>
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
            {/* <h5>User: {user.name}</h5> */}
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                            
                        <Nav className='ms-auto'>
                            <Button variant="outline-success" onClick={handleShowLogin}>Login</Button>{''}
                            <Button variant="outline-success" onClick={handleShowRegister}>Register</Button>
                        </Nav>
                    </Navbar.Collapse> 
        </Navbar>

        <Offcanvas show={showLogin} onHide={handleCloseLogin}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Login</Offcanvas.Title>
            </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type="text" placeholder='Enter Name' value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Offcanvas.Body>

        </Offcanvas>
        <Offcanvas show={showRegister} onHide={handleCloseRegister}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Register</Offcanvas.Title>
            </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type="text" placeholder='Enter Name' value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        
                    </Form>
                </Offcanvas.Body>

        </Offcanvas>


    </div>


  )


}

export default NavBar