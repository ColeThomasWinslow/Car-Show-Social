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
        <OpenAddBtn onClick={openForm} className="OpenAddBtn ">
          + ADD NEW POST
        </OpenAddBtn>
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <NewPostForm onSubmit={submitForm}>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Signed In As</Form.Label>
                  <Form.Control
                    className="SignedIn"
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
                <Form.Control
                  className="Make"
                  type="text"
                  required
                  ref={itemTitle}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="DesLabel"> Describe your Car</Form.Label>
                <Form.Control
                  className="Description"
                  Description
                  type="text"
                  required
                  ref={itemDesc}
                />
              </Form.Group>
            </Col>

            <Row></Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="photo">
                    Choose A Photo To Upload
                  </Form.Label>
                  <Form.File custom required ref={itemImage} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
            <Button class="submitBtn" type="submit">
              Submit
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
const OpenAddBtn = styled.div`
  cursor: pointer;
  background: #2b2b2b;
  padding: 10px;
  width: 150px;
  text-align: center;
  border-radius: 10px;
  box-shadow: grey 0px 0px 10px;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.3s;
  margin-top: 20px;
  &:hover {
    box-shadow: black 0px 0px 10px;
    background: white;
    color: black;
  }
`;
