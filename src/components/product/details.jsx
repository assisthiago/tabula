import {
  Button,
  Carousel,
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

import Categories from "../../components/categories";

import styles from "./details.module.css";
import { Plus, Dash } from "react-bootstrap-icons";

export default function Details({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="fs-5">
          Lorem ipsum dolor + Dit amet + Consectetur + Adipiscing Elit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container fluid>
            <Row className="d-none d-sm-flex">
              <Col md={6} xs={12}>
                <div className="position-relative">
                  <Image
                    fluid
                    rounded
                    className="d-block border-0"
                    src="https://picsum.photos/2000/2000"
                  />
                  <div
                    className="position-absolute start-50 translate-middle-x bg-body px-2 pt-1 py-1 rounded-top border-0"
                    style={{ bottom: "-1px" }}
                  >
                    <Stack
                      direction="horizontal"
                      gap={2}
                      className="align-items-baseline"
                    >
                      <strong>R$999.99</strong>
                      <small className="text-muted">
                        <del>R$999.99</del>
                      </small>
                    </Stack>
                  </div>
                </div>
              </Col>
              <Col
                md={6}
                xs={12}
                className="overflow-y-scroll"
                style={{ maxHeight: "370px" }}
              >
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  volutpat dolor quis molestie dignissim. Aliquam nulla felis,
                  lacinia et aliquam.
                </p>
                <Categories data={[1, 2, 3, 4, 5, 6, 7, 8]} />
              </Col>
            </Row>

            <Row
              className="d-flex d-sm-none overflow-y-scroll"
              style={{ maxHeight: "50vh" }}
            >
              <Col md={6} xs={12}>
                <div className="position-relative">
                  <Image
                    fluid
                    rounded
                    className="d-block border-0"
                    src="https://picsum.photos/2000/2000"
                  />
                  <div
                    className="position-absolute start-50 translate-middle-x bg-body px-2 pt-1 py-1 rounded-top border-0"
                    style={{ bottom: "-1px" }}
                  >
                    <Stack
                      direction="horizontal"
                      gap={2}
                      className="align-items-baseline"
                    >
                      <strong>R$999.99</strong>
                      <small className="text-muted">
                        <del>R$999.99</del>
                      </small>
                    </Stack>
                  </div>
                </div>
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  volutpat dolor quis molestie dignissim. Aliquam nulla felis,
                  lacinia et aliquam.
                </p>
                <Categories data={[1, 2, 3, 4, 5, 6, 7, 8]} />
              </Col>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Body className="border-top">
        <Container fluid>
          <Row>
            <Col md={6} xs={12}>
              <InputGroup>
                <Button
                  variant="light"
                  className="border-light-subtle border-end-0"
                >
                  <Dash />
                </Button>
                <Form.Control
                  value={99}
                  readOnly
                  className="text-center border-start-0 border-light-subtle border-end-0"
                />
                <Button
                  variant="primary"
                  className="border-light-subtle border-start-0"
                >
                  <Plus />
                </Button>
              </InputGroup>
            </Col>
            <Col md={6} xs={12}>
              <Button variant="primary" className="w-100 mt-3 mt-md-0 shadow">
                <Stack
                  direction="horizontal"
                  className="justify-content-between"
                >
                  <strong>Adicionar</strong>
                  <span>R$999.99</span>
                </Stack>
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
