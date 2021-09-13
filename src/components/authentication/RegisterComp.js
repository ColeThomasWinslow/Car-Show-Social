import { Button, Form, Modal, Alert } from "react-bootstrap";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";
export const RegisterComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const cmfPasswordRef = useRef();

  const { register } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    if (passwordRef.current.value !== cmfPasswordRef.current.value) {
      return setError("Passwords does not match");
    }

    try {
      await register(emailRef.current.value, passwordRef.current.value);
      closeForm();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <RegBtn onClick={openForm} className="btn btn-outline-secondary mx-2">
        Register
      </RegBtn>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" required ref={cmfPasswordRef} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
const RegBtn = styled.div`
  background: #709b99;
  color: white;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  transition: all 0.5s;
  &:hover {
    background: #b7ded5;
    color: #709b99;
  }
`;
