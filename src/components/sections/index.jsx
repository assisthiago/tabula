import {
  Accordion,
  AccordionContext,
  Button,
  Card,
  Col,
  Row,
  Stack,
  useAccordionButton,
} from "react-bootstrap";

import "./index.module.css";
import { EyeFill, EyeSlash } from "react-bootstrap-icons";
import { useContext } from "react";

import Product from "../product";

function CustomToggle({ children, eventKey }) {
  const { activeEventKey } = useContext(AccordionContext);
  const isCurrentEventKey = activeEventKey.includes(eventKey);

  return (
    <Stack direction="horizontal" gap={3} className="justify-content-between">
      <h2 onClick={useAccordionButton(eventKey)}>{children}</h2>
      <Button
        onClick={useAccordionButton(eventKey)}
        variant="link"
        className="text-dark px-0"
      >
        {isCurrentEventKey ? <EyeSlash size={24} /> : <EyeFill size={24} />}
      </Button>
    </Stack>
  );
}

export default function Sections({ data }) {
  return (
    <Accordion defaultActiveKey={[1, 2, 3]} alwaysOpen>
      {[1, 2, 3].map((category) => (
        <Card key={category} className="border-0 bg-transparent">
          <Card.Header
            className="bg-light position-sticky z-2 mb-3 rounded-0"
            style={{
              top: 85,
              marginLeft: -16,
              marginRight: -16,
            }}
          >
            <CustomToggle eventKey={category}>
              Lorem Ipsum Dolor Dit Amet
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={category}>
            <Card.Body className="px-0">
              <Row>
                {data.map((item) => (
                  <Col key={item} xs={12} md={4} lg={3} className="mb-4">
                    <Product />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}
