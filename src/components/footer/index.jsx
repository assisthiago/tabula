import { Navbar, Button, Container, Stack } from "react-bootstrap";
import { Inbox, InboxesFill, Journals, Person } from "react-bootstrap-icons";
import { useState } from "react";

import styles from "./index.module.css";
import Orders from "../orders";

export default function Footer() {
  const [showOrders, setShowOrders] = useState(true);
  const hasItensInTray = true;

  return (
    <>
      <Navbar expand="sm" className="shadow-lg bg-light py-sm-3" fixed="bottom">
        <Container className="px-sm-5">
          <Stack direction="horizontal" gap={3} className="px-sm-5 mx-auto">
            <Button variant="light" onClick={() => setShowOrders(true)}>
              <Stack gap={1} className="align-items-center flex-sm-row">
                <Journals size={20} />
                <small>Pedidos</small>
              </Stack>
            </Button>
            <Button variant="light">
              <Stack gap={1} className="align-items-center flex-sm-row">
                {hasItensInTray ? (
                  <InboxesFill size={20} />
                ) : (
                  <Inbox size={20} />
                )}
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
      <Orders show={showOrders} handleClose={() => setShowOrders(false)} />
    </>
  );
}
