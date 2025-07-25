import { mixinFlex } from "@/styles/mixins";
import { Stack, styled, Typography } from "@mui/material";
import { motion, easeOut } from "motion/react";
import React, { useState } from "react";

const BackLayer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const animationVariants1 = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const animationVariants2 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
    accelerate: {
      x: [45, 15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 1.5,
        delay: 0.8,
        ease: easeOut,
        times: [0, 0.6, 1], // 각 키프레임의 타이밍
      },
    },
  };

  return (
    <Container>
      <Title
        onViewportEnter={() => setIsVisible(true)}
        onViewportLeave={() => setIsVisible(false)}
        variant="h1"
        variants={animationVariants1}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        편지가&nbsp;
      </Title>
      <Title
        variant="h1"
        variants={animationVariants2}
        initial="hidden"
        animate={isVisible ? ["visible", "accelerate"] : "hidden"}
      >
        도착했어요!
      </Title>
    </Container>
  );
};

export default BackLayer;

const Container = styled(Stack)`
  ${mixinFlex("row", "center", "center")}
  position: absolute;
  top: 120px;
`;

const Title = styled(motion(Typography))`
  color: ${({ theme }) => theme.palette.primary.main};
  transform-origin: right bottom;
`;
