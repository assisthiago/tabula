import { Col, Container, Row } from "react-bootstrap";

// Components
import Banner from "../banner";
import Navbar from "../navbar";
import Loader from "../loader";

export default function Layout({ children }) {
  return (
    <>
      {/* <Loader /> */}

      <Navbar />

      <Container className="mb-3">
        <Banner />
      </Container>

      {children}
    </>
  );
}
