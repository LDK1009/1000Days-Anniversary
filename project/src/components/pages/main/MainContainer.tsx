"use client";

import { Box, styled } from "@mui/material";
import React from "react";
import Section1 from "./section/1/Section1";
import Section2 from "./section/2/Section2";
import Section3 from "./section/3/Section3";
import Section4 from "./section/4/Section4";
import { mixinHideScrollbar } from "@/styles/mixins";
import TextConfetti from "@/components/common/TextConfetti";
import Section5 from "./section/5/Section5";

const MainContainer = () => {
  return (
    <Container>
      <TextConfetti
        particle={{ text: "❤", size: [5, 10], speed: [0, 100] }}
        emitters={[
          {
            position: "top",
            direction: "bottom",
            repeatCount: 1,
            duration: 1,
            delay: 0,
            particleQuantity: 5,
          },
        ]}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Container>
  );
};

export default MainContainer;

const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  ${mixinHideScrollbar()}
`;
