// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Button, Card, Stack } from "react-bootstrap";

import "./index.module.css";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";

function PrevSlide() {
  const swiper = useSwiper();
  return (
    <Button variant="light" size="sm" onClick={() => swiper.slidePrev()}>
      <ArrowLeftShort size={24} />
    </Button>
  );
}
function NextSlide() {
  const swiper = useSwiper();
  return (
    <Button variant="light" size="sm" onClick={() => swiper.slideNext()}>
      <ArrowRightShort size={24} />
    </Button>
  );
}

export default function Slider({
  data = [],
  spaceBetween = 25,
  slidesPerView = 3,
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={[Navigation]}
      className="py-5 position-relative"
    >
      {data.map((item) => (
        <SwiperSlide key={item} className="mt-3">
          <Card className="border-0 shadow">
            <Card.Img variant="top" src="https://picsum.photos/286/180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Stack
                direction="horizontal"
                gap={2}
                className="align-items-baseline"
              >
                <strong>R$99.99</strong>
                <small className="text-muted">
                  <del>R$99.99</del>
                </small>
              </Stack>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
      <Stack
        direction="horizontal"
        className="position-absolute top-0 left-0 w-100 justify-content-between"
      >
        <h1>Lorem Ipsum</h1>
        <Stack direction="horizontal" gap={3}>
          <PrevSlide />
          <span className="text-muted">Arraste para os lados</span>
          <NextSlide />
        </Stack>
      </Stack>
    </Swiper>
  );
}
