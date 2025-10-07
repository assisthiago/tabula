import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";

import Categories from "../../components/categories/index";
import Layout from "../../components/layout/index";
import Slider from "../../components/slider";
import { Info, InfoCircle, InfoCircleFill } from "react-bootstrap-icons";

export default function Home() {
  return (
    <Layout>
      {/* Header */}
      <Container>
        <Row className="d-none d-sm-flex">
          <Col>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-between"
            >
              <Stack direction="horizontal" gap={3}>
                <Image
                  src="https://picsum.photos/75/75"
                  alt="Logo"
                  width={75}
                  height={75}
                  rounded
                />
                <Stack
                  direction="vertical"
                  gap={1}
                  className="justify-content-center"
                >
                  <h1 className="m-0">Lorem Ipsum Nulla Vitae</h1>
                  <small className="text-muted">Pedido mínimo R$99.99</small>
                </Stack>
              </Stack>
              <Stack
                direction="vertical"
                gap={0}
                className="align-items-end justify-content-center"
              >
                <Button
                  variant="link"
                  className="text-decoration-none fw-bold p-0"
                >
                  Ver mais sobre a loja
                </Button>
                <p className="m-0">Aberto, 00-99 min.</p>
              </Stack>
            </Stack>
          </Col>
        </Row>
        <Row className="d-flex d-sm-none">
          <Col>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-between"
            >
              <Stack direction="horizontal" gap={3}>
                <Image
                  src="https://picsum.photos/75/75"
                  alt="Logo"
                  width={75}
                  height={75}
                  rounded
                />
                <Stack
                  direction="vertical"
                  gap={1}
                  className="justify-content-center"
                >
                  <h1 className="m-0">Lorem Ipsum Nulla Vitae</h1>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction="horizontal"
              gap={0}
              className="align-items-center justify-content-between mt-3"
            >
              <div>
                <p className="m-0">Aberto, 00-99 min.</p>
                <small className="d-block text-muted">
                  Pedido mínimo R$99.99
                </small>
              </div>
              <Button
                variant="link"
                className="text-decoration-none fw-bold p-0"
              >
                Ver mais sobre a loja
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>

      {/* Highlights */}
      <Container fluid className="bg-white">
        <hr className="my-5" />
        <Slider data={[1, 2, 3, 4, 5, 6, 7]} highlight={true} />
      </Container>
      <hr className="mb-5" />

      {/* Products */}
      <Container className="mb-3">
        <Categories data={[1, 2, 3, 4, 5, 6, 7]} />
      </Container>
    </Layout>
  );
}
