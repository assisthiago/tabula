import { Badge, Card, ListGroup, Offcanvas, Stack } from "react-bootstrap";

import styles from "./index.module.css";

export default function Orders({ show, handleClose }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return (
          <Badge bg="warning" className="text-black shadow-sm">
            Pendente
          </Badge>
        );
      case "preparing":
        return (
          <Badge bg="primary" className="shadow-sm">
            Preparando
          </Badge>
        );
      case "delivering":
        return (
          <Badge bg="dark" className="shadow-sm">
            Entregando
          </Badge>
        );
      case "completed":
        return (
          <Badge bg="success" className="shadow-sm">
            Concluído
          </Badge>
        );
      case "canceled":
        return (
          <Badge bg="danger" className="shadow-sm">
            Cancelado
          </Badge>
        );
      default:
        return (
          <Badge bg="secondary" className="shadow-sm">
            Desconhecido
          </Badge>
        );
    }
  };

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton className="shadow z-3">
        <Offcanvas.Title>Pedidos</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="z-1">
        <Stack direction="vertical" gap={3}>
          {["pending", "preparing", "delivering", "completed", "canceled"].map(
            (order, index) => (
              <Card
                className={`border-0 shadow ${styles.order_card} ${
                  order === "canceled"
                    ? "text-decoration-line-through text-muted"
                    : ""
                }`}
                key={index}
              >
                <Card.Header>
                  <Stack
                    direction="horizontal"
                    className="justify-content-between align-items-center"
                  >
                    <span>#9999</span>
                    {getStatusBadge(order)}
                  </Stack>
                </Card.Header>
                <ListGroup variant="flush">
                  {[1, 2, 3, 4].map((item, jndex) => (
                    <>
                      {jndex <= 1 && (
                        <ListGroup.Item className="py-1 small" key={jndex}>
                          <Stack
                            direction="horizontal"
                            gap={3}
                            className="justify-content-between align-items-center"
                          >
                            <span className="text-truncate">
                              9999 Lorem ipsum dolor + Dit amet + Consectetur +
                              Adipiscing Elit
                            </span>
                            <span>R$9999.99</span>
                          </Stack>
                        </ListGroup.Item>
                      )}
                    </>
                  ))}
                  <ListGroup.Item className="py-1 small">
                    + 9999 lorem
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className="py-2">
                  <Stack
                    direction="horizontal"
                    className="justify-content-between align-items-center"
                  >
                    <small>R$ 9999,99</small>
                    <small>DD/MM/YYYY 99:99</small>
                  </Stack>
                </Card.Body>
              </Card>
            )
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
