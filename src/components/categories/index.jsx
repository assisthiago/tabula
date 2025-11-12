import {
  Accordion,
  AccordionContext,
  Badge,
  Button,
  Card,
  Col,
  Image,
  Form,
  Row,
  Stack,
  FloatingLabel,
  InputGroup,
} from "react-bootstrap";

import "./index.module.css";
import { Dash, EyeFill, EyeSlash, Plus } from "react-bootstrap-icons";

export default function Categories({ data }) {
  const booleanValue = false;
  const categories = ["one-option", "many-options", "commentary"];
  const items = [1, 2, 3];

  return (
    <>
      {categories.map((category, index) => (
        <Accordion key={index} alwaysOpen>
          <Card className="border-0 bg-transparent">
            <Card.Header className="bg-light mt-3 rounded-0  position-sticky top-0 z-3">
              <Stack
                direction="horizontal"
                gap={3}
                className="justify-content-between"
              >
                <span>
                  <strong>Lorem Ipsum Dolor</strong>
                  <small className="text-muted m-0 d-block">
                    Lorem 00 Dolor
                  </small>
                </span>
                {booleanValue ? (
                  <Badge bg="light" text="dark" className="fw-normal">
                    Opcional
                  </Badge>
                ) : (
                  <Badge bg="light" text="dark">
                    Obrigatório
                  </Badge>
                )}
              </Stack>
            </Card.Header>
            <Accordion.Collapse>
              <>
                {category === "one-option" && (
                  <>
                    {items.map((item) => (
                      <Form.Check
                        reverse
                        key={item}
                        type={"switch"}
                        id={`switch-${category}-${item}`}
                        className="mt-3"
                        label={
                          <Stack
                            direction="horizontal"
                            className="align-items-center"
                            gap={3}
                          >
                            <Image
                              src="https://picsum.photos/85"
                              alt="Description"
                            />
                            <Stack
                              direction="vertical"
                              className="justify-content-between text-start"
                            >
                              <span className="lh-1">
                                In volutpat dolor quis molestie
                              </span>
                              <small className="text-muted">R$999.99</small>
                            </Stack>
                          </Stack>
                        }
                      />
                    ))}
                  </>
                )}
                {category === "many-options" && (
                  <>
                    {items.map((item) => (
                      <Stack
                        key={item}
                        direction="horizontal"
                        className="align-items-center mt-3"
                        gap={3}
                      >
                        <Image
                          src="https://picsum.photos/85"
                          alt="Description"
                        />
                        <Stack
                          direction="vertical"
                          className="justify-content-between text-start"
                        >
                          <span className="lh-1">
                            In volutpat dolor quis molestie
                          </span>
                          <small className="text-muted mb-1">R$999.99</small>
                          <InputGroup>
                            <Button
                              size="sm"
                              variant="light"
                              className="border-light-subtle border-end-0"
                            >
                              <Dash />
                            </Button>
                            <Form.Control
                              size="sm"
                              value={99}
                              readOnly
                              className="text-center border-start-0 border-light-subtle border-end-0"
                            />
                            <Button
                              size="sm"
                              variant="primary"
                              className="border-light-subtle border-start-0"
                            >
                              <Plus />
                            </Button>
                          </InputGroup>
                        </Stack>
                      </Stack>
                    ))}
                  </>
                )}
                {category === "commentary" && (
                  <FloatingLabel
                    className="mt-3"
                    controlId="floatingTextarea2"
                    label="In volutpat dolor quis molestie..."
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                )}
              </>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}
