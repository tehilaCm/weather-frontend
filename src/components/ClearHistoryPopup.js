import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Modal from "react-modal";

Modal.setAppElement("#root");

const ClearHistoryPopup = ({ modalIsOpen, setIsOpen, clearHistory }) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before",
        }}
      >
        <div className="line-up"></div>

        <Container style={{ padding: "20px" }}>
          <Row>
            <Col>
              <p style={{ whiteSpace: "normal", textAlign: "center" }}>
                Are You Sure You Want To Clear You'r History?
              </p>
            </Col>
          </Row>
          <Row className="buttons-container">
            <Col style={{ padding: "0" }}>
              <Button className="cancel-btn" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </Col>
            <Col style={{ padding: "0", marginLeft: "5px" }}>
              <Button className="clear-btn" onClick={clearHistory}>
                Clear
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};

export default ClearHistoryPopup;
