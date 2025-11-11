import { Card, Modal, Stack } from "react-bootstrap";

import styles from "./index.module.css";
import { useState } from "react";

import Details from "./details";

export default function Product({ highlight = false }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Card
        data-bs-theme={highlight ? "dark" : "light"}
        className={`border-0 shadow ${styles.product_card}`}
        onClick={() => setShowDetails(true)}
      >
        <Card.Img variant="top" src="https://picsum.photos/286/180" />
        <Card.Body>
          <Card.Title
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            Lorem ipsum dolor + Dit amet + Consectetur + Adipiscing Elit
          </Card.Title>
          <Card.Text
            className="lh-sm"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat
            dolor quis molestie dignissim. Aliquam nulla felis, lacinia et
            aliquam.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Stack
            direction="horizontal"
            gap={2}
            className="align-items-baseline"
          >
            <strong>R$999.99</strong>
            <small className="text-muted">
              <del>R$999.99</del>
            </small>
          </Stack>
        </Card.Body>
      </Card>
      <Details show={showDetails} onHide={() => setShowDetails(false)} />
    </>
  );
}
