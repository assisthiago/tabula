import {
  Navbar,
  Button,
  Container,
  Form,
  InputGroup,
  Stack,
} from "react-bootstrap";
import {
  Inbox,
  Journals,
  List,
  MenuUp,
  Person,
  Search,
} from "react-bootstrap-icons";

import "./index.module.css";

export default function Footer() {
  return (
    <Navbar expand="sm" className="shadow-lg bg-light py-sm-3" fixed="bottom">
      <Container className="px-sm-5">
        <Stack direction="horizontal" gap={3} className="px-sm-5 mx-auto">
          <Button variant="light">
            <Stack gap={1} className="align-items-center flex-sm-row">
              <MenuUp size={20} />
              <small>Cardápio</small>
            </Stack>
          </Button>
          <Button variant="light">
            <Stack gap={1} className="align-items-center flex-sm-row">
              <Journals size={20} />
              <small>Pedidos</small>
            </Stack>
          </Button>
          <Button variant="light">
            <Stack gap={1} className="align-items-center flex-sm-row">
              <Inbox size={20} />
              <small>Bandeja</small>
            </Stack>
          </Button>
          <Button variant="light">
            <Stack gap={1} className="align-items-center flex-sm-row">
              <Person size={20} />
              <small>Conta</small>
            </Stack>
          </Button>
        </Stack>
      </Container>
    </Navbar>
  );
}
