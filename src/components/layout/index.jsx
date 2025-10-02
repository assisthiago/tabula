import { Col, Container, Row } from "react-bootstrap";

// Components
import Banner from "../banner";
import Navbar from "../navbar";
import Loader from "../loader";

export default function Layout({ children }) {
  return (
    <>
      {/* <Loader /> */}
      <Container fluid className="mb-5">
        <Row>
          <Navbar />
        </Row>
      </Container>

      <Container className="mb-3">
        <Banner />
      </Container>

      {children}
    </>
  );
}
