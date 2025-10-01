import { Col, Image, Row } from "react-bootstrap";
import styles from "./index.module.css";

export default function Banner() {
  return (
    <Row id="banner" className={styles.banner}>
      <Col>
        <Image
          className={`${styles.banner_image} rounded-1`}
          src="https://picsum.photos/1920/1080"
          alt="Banner"
          fluid
        />
      </Col>
    </Row>
  );
}
