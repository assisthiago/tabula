import {
  Accordion,
  AccordionContext,
  Button,
  Card,
  Col,
  Form,
  Row,
  Stack,
} from "react-bootstrap";

import "./index.module.css";
import { EyeFill, EyeSlash } from "react-bootstrap-icons";

export default function Categories({ data }) {
  return (
    <Form>
      {[1, 2, 3].map((category) => (
        <Accordion key={category} defaultActiveKey={data} alwaysOpen>
          <Card className="border-0 bg-transparent">
            <Card.Header className="bg-light mb-3 rounded-0  position-sticky top-0 z-2">
              <strong>Lorem Ipsum Dolor</strong>
              <p className="text-muted small m-0">Lorem 00 Dolor</p>
            </Card.Header>
            <Accordion.Collapse eventKey={category}>
              <>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
              </>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </Form>
  );
}
