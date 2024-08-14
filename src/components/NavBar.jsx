import { useEffect } from 'react';
import React, { useContext, useState } from 'react';
import { Navbar, Nav, Button, Offcanvas, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserContext  from '../context/UserContext';
import axios from 'axios';
import '../App.css'



const NavBar = () => {
    const { user, setUser } = useContext(UserContext);
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

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        console.log(storedUser);
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);


    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://fakestoreapi.com/users', {
                username: userName,
                email: email,
                password: password,
            });
            
            const userData = {
                id: response.data.id,
                name: userName,
                email: email,
                token: response.data.token,
                isLoggedIn: true,
            };

            sessionStorage.setItem('user', JSON.stringify(userData));
            console.log(userData);
            setUser(userData);
            alert('Login Successful');
            navigate('/products');
        } catch (error) {
            console.error(error);
        }
    }
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://fakestoreapi.com/users', {
                username: userName,
                email: email,
                password: password,
            });

            const newUser = {
                id: response.data.id,
                name: userName,
                email: email,
                token: response.data.token,
                isLoggedIn: true,
            };
            sessionStorage.setItem('user', JSON.stringify(newUser));
            console.log(newUser);
            setUser(newUser);
            alert('Registration Successful');
            navigate('/products');
            handleCloseRegister();
        }catch (error) {
            console.error(error);
            alert('Registration Failed');
        }
    }

    

    
    




  return (


    <div>
        <Navbar className='navbar-home' bg='transparent' expand="sm">
            <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
            {/* <h5>User: {user.name}</h5> */}
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                            
                        <Nav className='ms-auto mt-2'>
                            <Button className='btn text-white' variant="contained" onClick={handleShowLogin}>Login</Button>{''}
                            <Button className='btn text-white' variant="contained" onClick={handleShowRegister}>Register</Button>
                        </Nav>
                    </Navbar.Collapse> 
        </Navbar>

        <Offcanvas className='sm' show={showLogin} onHide={handleCloseLogin}>
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