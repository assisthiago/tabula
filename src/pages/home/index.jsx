import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";

import Slider from "../../components/slider";
import Layout from "../../components/layout/index";

export default function Home() {
  return (
    <Layout>
      {/* Header */}
      <Container>
        <Row>
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
                <Stack direction="vertical" gap={1}>
                  <h1 className="m-0">Lorem Ipsum Nulla Vitae</h1>
                  <small className="text-muted">Pedido mínimo R$99.99</small>
                </Stack>
              </Stack>
              <Stack
                direction="horizontal"
                gap={3}
                className="align-items-center"
              >
                <Button
                  variant="link"
                  className="text-decoration-none fw-bold p-0"
                >
                  Ver mais sobre a loja
                </Button>
                |<span>Aberto, 00-99 min. R$99.99</span>
              </Stack>
            </Stack>
          </Col>
        </Row>
      </Container>

      {/* Highlights */}
      <Container fluid className="overflow-hidden">
        <hr className="my-5" />
        <Row>
          <Col>
            <Container>
              <h2>Lorem Ipsum</h2>
              <Slider childrens={[1, 2, 3, 4, 5, 6, 7]} />
            </Container>
          </Col>
        </Row>
      </Container>
      <hr className="mb-5" />
    </Layout>
  );
}
