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
    <Button
      variant="light"
      size="sm"
      className="shadow py-2 bg-light bg-opacity-25 border-0 z-3 position-absolute top-50 start-0 translate-middle-y "
      style={{ backdropFilter: "blur(10px)", marginLeft: "-2rem" }}
      onClick={() => swiper.slidePrev()}
    >
      <ArrowLeftShort size={24} />
    </Button>
  );
}
function NextSlide() {
  const swiper = useSwiper();
  return (
    <Button
      variant="light"
      size="sm"
      className="shadow py-2 bg-light bg-opacity-25 border-0 z-3 position-absolute top-50 end-0 translate-middle-y "
      style={{ backdropFilter: "blur(10px)", marginRight: "-2rem" }}
      onClick={() => swiper.slideNext()}
    >
      <ArrowRightShort size={24} />
    </Button>
  );
}

export default function Slider({
  childrens = [],
  spaceBetween = 15,
  slidesPerView = 4,
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={[Navigation]}
      className="pb-5 position-relative overflow-visible"
    >
      {childrens.map((item) => (
        <SwiperSlide key={item}>
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
              <Card.Text>
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
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
      <PrevSlide />
      <NextSlide />
    </Swiper>
  );
}
