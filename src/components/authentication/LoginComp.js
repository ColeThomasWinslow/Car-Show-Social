import { Button, Form, Modal, Alert } from "react-bootstrap";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";
export const LoginComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      closeForm();
    } catch (error) {
      setError("Invalid login");
    }
  };

  return (
    <>
      <LoginBtn onClick={openForm} className="btn btn-outline-secondary mx-2">
        Login
      </LoginBtn>
      <Modal centered show={showForm} onHide={closeForm}>
        <NewPostForm onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title className="Title">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="Make"
                type="email"
                required
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="DesLabel">Password</Form.Label>
              <Form.Control
                className="Make"
                type="password"
                required
                ref={passwordRef}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
            <Button className="submitBtn" variant="primary" type="submit">
              Login
            </Button>
          </Modal.Footer>
        </NewPostForm>
      </Modal>
    </>
  );
};
const NewPostForm = styled.form`
  background: black;
  box-shadow: grey 2px 2px 10px;
  text-align: center;
  border: 5px solid #2b2b2b;
  .DesLabel {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .Title {
    background: #2b2b2b;
    padding: 5px;
    text-transform: uppercase;
    width: 100%;
    font-size: 18px;
    text-align: center;
    color: #ff8178;
  }
  .Make {
    color: white;
    background: #2b2b2b;
    text-align: center;
  }
  .SignedIn {
    margin-bottom: 10px;
    border: none;
    text-align: center;
    background: grey;
    color: white;
  }
  .Description {
    background: #2b2b2b;
    display: flex;
    align-items: flex-start;
    height: 100px;
    text-align: left;
    color: white;
  }
  .photo {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }
  .submitBtn {
    background: #ff8178;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 10px;
    &:hover {
      box-shadow: 0px 0px 5px;
      background: black;
    }
  }
`;
const LoginBtn = styled.div`
  background: #ff8178;
  color: white;
  box-shadow: black 2px 2px 10px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  width: 150px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  transition: all 0.3s;
  &:hover {
    background: black;
    color: white;
  }
`;
