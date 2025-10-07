import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Modal,
  Row,
  Stack,
  Table,
} from "react-bootstrap";

import styles from "./details.module.css";

export default function Details({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      dialogClassName={styles.modal_90w}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Lorem ipsum dolor + Dit amet + Consectetur + Adipiscing Elit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="horizontal" gap={3}>
          <Image
            className="rounded-1 shadow"
            style={{
              width: "100%",
              height: "500px",
              aspectRatio: "1/1",
              display: "block",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="https://picsum.photos/1920/1080"
            alt="Banner"
            fluid
          />
          <Container>
            <Row>
              <Col></Col>
              <Form>
                <Form.Group className="mb-3" controlId="quantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" min={1} defaultValue={1} />
                </Form.Group>
                <Stack
                  direction="horizontal"
                  gap={2}
                  className="justify-content-end"
                >
                  <strong className="me-auto">R$99.99</strong>
                  <button className="btn btn-primary">Add to Cart</button>
                </Stack>
              </Form>
            </Row>
          </Container>
        </Stack>
      </Modal.Body>
      {/* <InputGroup>
            <Button variant="outline-secondary" disabled>
              -
            </Button>
            <Form.Control
              type="number"
              min={1}
              defaultValue={1}
              style={{ maxWidth: "75px", textAlign: "center" }}
            />
            <Button variant="outline-secondary">+</Button>
          </InputGroup> */}
      {/* <Stack direction="horizontal"> */}
      {/* <Button className="btn btn-primary">
        <Stack direction="horizontal" gap={5} className="align-items-center">
          <span>Add to Cart</span>
          <span>R$99.99</span>
        </Stack>
      </Button> */}
      {/* </Stack> */}
    </Modal>
  );
}
