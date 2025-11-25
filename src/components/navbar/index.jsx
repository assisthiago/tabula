import {
  Navbar as BootstrapNavbar,
  Button,
  Container,
  Form,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { List, Search } from "react-bootstrap-icons";

import "./index.module.css";

export default function Navbar() {
  return (
    <BootstrapNavbar expand="sm" className="shadow bg-light mb-5" sticky="top">
      <Container fluid className="px-3 py-3">
        <Stack
          direction="horizontal"
          gap={3}
          className="w-100 align-content-between"
        >
          <Form className="d-flex m-auto">
            <InputGroup>
              <InputGroup.Text className="bg-transparent border-end-0 pe-0">
                <Search />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Cardárpio"
                className="border-start-0 bg-transparent"
                aria-label="Search"
              />
            </InputGroup>
          </Form>
        </Stack>
      </Container>
    </BootstrapNavbar>
  );
}
