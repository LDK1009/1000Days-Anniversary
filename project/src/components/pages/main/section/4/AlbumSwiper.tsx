import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { styled } from "@mui/material/styles";

type PropsType = {
  children: React.ReactNode;
  onSlideChange?: (swiper: SwiperType) => void;
};

const AlbumSwiper = ({ children, onSlideChange }: PropsType) => {
  return (
    <Container
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 0.9,
      }}
      modules={[EffectCoverflow, Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      onSlideChange={onSlideChange}
    >
      {children}
    </Container>
  );
};

export default AlbumSwiper;

const Container = styled(Swiper)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  cursor: grab;
`;
