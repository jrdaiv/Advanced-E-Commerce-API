import axios  from "axios";
import React, { useState, useContext } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import LoginRegisterNav from "./LoginRegisterNav";
import UserContext from "../context/UserContext";
import '../App.css'



const Settings = () => {
  const { user } = useContext(UserContext);
  const [userName, setUserName] = useState(user.userName || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState('');




  const deleteUser = async (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete your account?')) {
        try {
            const response = await axios.delete(
              `https://fakestoreapi.com/users/${user.id}`
            );
            sessionStorage.removeItem('user');
            console.log(response.data);
            console.log("Deleted User",sessionStorage.removeItem('user'));
            alert("Profile Deleted");
          } catch (error) {
            console.error(error);
            alert("Profile Delete Failed");
          }

        }
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(user);
    console.log(userName, email, password);
    if (!userName || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.put(
        `https://fakestoreapi.com/users/${user.id}`,
        {
          username: userName,
          email: email,
          password: password,
        }
      );
    //   sessionStorage.setItem('user', JSON.stringify(response.data));
      console.log(response.data);
      alert("Profile Updated");
    } catch (error) {
      console.error(error);
      alert("Profile Update Failed");
    }

  };



  return (
    <div>
      <LoginRegisterNav />
      <h2 className="mt-5 text-white">Settings</h2>
      <h5>Update Profile</h5>
      <Form onSubmit={handleUpdate}>
        <Form.Group as={Row} className="mb-3"  controlId="formPlaintextUserName" >
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter Username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3"  controlId="formPlaintextEmail" >
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword" >
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
      <h5 className="mt-5 ">Delete User Account</h5>
      <Form onSubmit={deleteUser}>
        <Button variant="danger" type="submit">
          Delete
        </Button>
      </Form>
    </div>
  );
};

export default Settings;
