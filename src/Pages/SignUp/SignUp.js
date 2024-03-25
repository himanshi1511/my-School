import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the user's input

    // Validate the user's input
    if (!name || !phoneNumber || !password || !confirmPassword) {
      // Show an error message to the user
      return;
    }

    // Compare the password and confirm password fields
    if (password !== confirmPassword) {
      // Show an error message to the user
      return;
    }

    // Login the user
    navigate("/");
    // ...
  };

  const handleClose = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <AiOutlineClose
        onClick={handleClose}
        style={{
          color: "black",
          fontSize: "50px",
          marginTop: "2rem",
          right: "0",
          left: "20rem",
        }}
      />
      <div className="login-container">
        <div className="loginform">
          <div className="login-header">
            <h3>Sign Up</h3>
          </div>
          <div className="login-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required={true}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>

                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required={true}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required={true}
                />
              </Form.Group>

              <Button type="submit" className="submitt">
                Sign Up
              </Button>

              <hr />

              <p className="or">Or</p>

              <hr />

              <Button>Continue With Facebook</Button>
              <Button>Continue With Google</Button>
              <Button>Continue With Github</Button>

              <a className="or" >Already have an account ? Login</a>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
