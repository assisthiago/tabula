import {
  Navbar as BootstrapNavbar,
  Button,
  Container,
  Form,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { List, Search } from "react-bootstrap-icons";

export default function Navbar() {
  return (
    <BootstrapNavbar expand="sm" className="shadow-sm">
      <Container fluid className="px-3 py-3">
        <Stack
          direction="horizontal"
          gap={3}
          className="w-100 align-content-between"
        >
          <Form className="d-flex m-auto">
            <InputGroup>
              <InputGroup.Text className="bg-transparent border-end-0">
                <Search />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Busque no cardápio"
                className="border-start-0 ps-0 bg-transparent text-center"
                aria-label="Search"
              />
            </InputGroup>
          </Form>
          <Button
            variant="light"
            className="d-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle-y me-3"
          >
            <List />
          </Button>
        </Stack>
      </Container>
    </BootstrapNavbar>
  );
}
