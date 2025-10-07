// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Button, Stack } from "react-bootstrap";

import "./index.module.css";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";

import Product from "../product";

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
  highlight = false,
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="py-5 position-relative"
    >
      {data.map((item) => (
        <SwiperSlide key={item} className="mt-3">
          <Product highlight={highlight} />
        </SwiperSlide>
      ))}
      <Stack
        direction="horizontal"
        className="position-absolute top-0 left-0 w-100 justify-content-between d-none d-sm-flex"
      >
        <h1>Lorem Ipsum Dolor Dita</h1>
        <Stack direction="horizontal" gap={3}>
          <PrevSlide />
          <span className="text-muted">Arraste para os lados</span>
          <NextSlide />
        </Stack>
      </Stack>

      <h1 className="d-flex d-sm-none position-absolute top-0 w-100">
        Lorem Ipsum Dolor Dita
      </h1>
      <p className="d-block d-sm-none position-absolute bottom-0 w-100 text-center text-muted">
        Arraste para os lados
      </p>
    </Swiper>
  );
}
