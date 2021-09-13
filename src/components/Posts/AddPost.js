import { Button, Form, Modal, Alert, Row, Col } from "react-bootstrap";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";
export const AddPost = ({ setAuction }) => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const itemTitle = useRef();
  const itemDesc = useRef();

  const itemImage = useRef();

  const { currentUser } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const imgTypes = ["image/png", "image/jpeg", "image/jpg"];

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    if (!imgTypes.includes(itemImage.current.files[0].type)) {
      return setError("Please use a valid image");
    }

    let newAuction = {
      email: currentUser.email,
      title: itemTitle.current.value,
      desc: itemDesc.current.value,
      likes: 0,
      itemImage: itemImage.current.files[0],
    };

    setAuction(newAuction);
    closeForm();
  };

  return (
    <>
      <div className="col d-flex justify-content-center my-3">
        <div onClick={openForm} className="btn justify-content-center ">
          <AddImg src="/images/AddPost.png" alt="addBTN" height="55px" />
        </div>
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title>Show Off Your Car</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Signed In As</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentUser.email}
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
            <Col>
              <Form.Group>
                <Form.Label>Make & Model</Form.Label>
                <Form.Control type="text" required ref={itemTitle} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label> Describe your Car</Form.Label>
                <Form.Control type="text" required ref={itemDesc} />
              </Form.Group>
            </Col>

            <Row></Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Photo</Form.Label>
                  <Form.File custom required ref={itemImage} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
const AddImg = styled.img`
  transition: all 0.5s;
  &:hover {
    opacity: 50%;
  }
`;
