import { Col, Container, Row } from "react-bootstrap";

// Components
import Banner from "../banner";
import Navbar from "../navbar";
import Footer from "../footer";
import Loader from "../loader";

export default function Layout({ children }) {
  return (
    <div className="pb-5">
      {/* <Loader /> */}

      <Navbar />

      <Container>
        <Banner />
      </Container>

      {children}

      <Footer />
    </div>
  );
}
