import { mixinFlex } from "@/styles/mixins";
import { Stack, styled, Typography } from "@mui/material";
import React from "react";
import { motion } from "motion/react";
import { FavoriteRounded } from "@mui/icons-material";

const Title = () => {
  const days = [1, 0, 0, 0];

  const dayItemVariants = {
    initial: { y: 0, rotate: 0 },
    animate: { y: [0, -8, 0], rotate: [0, 16, 0] },
    transition: (index: number) => ({
      duration: 0.5,
      delay: 0.5 * index,
      repeat: Infinity,
      repeatDelay: 0.5 * days.length,
    }),
  };

  const heartIconVariants = {
    initial: { opacity: 0, y: 0, rotate: 0 },
    animate: { opacity: [0, 1], y: [0, -4] },
    transition: { duration: 0.5, delay: 0.5 * days.length },
  };

  return (
    <Container>
      <SubTitle>민주와 함께 걸어온</SubTitle>
      <Days>
        {days.map((day, index) => (
          <DayItem
            key={index}
            variants={dayItemVariants}
            initial="initial"
            animate="animate"
            transition={dayItemVariants.transition(index)}
          >
            {day}
          </DayItem>
        ))}
        일
        <HeartIcon
          variants={heartIconVariants}
          initial="initial"
          animate="animate"
          transition={heartIconVariants.transition}
        />
      </Days>
    </Container>
  );
};

export default Title;

const Container = styled(Stack)`
  ${mixinFlex("column", "start", "center")}
`;

const SubTitle = styled(Typography)`
  font-size: 32px;
  color: ${({ theme }) => theme.palette.primary.light};
`;

const Days = styled(Stack)`
  position: relative;

  ${mixinFlex("row", "center", "center")}
  column-gap: 2px;
  font-size: 100px;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const DayItem = styled(motion.div)``;

const HeartIcon = styled(motion(FavoriteRounded))`
  position: absolute;
  top: 0;
  right: 0;

  color: ${({ theme }) => theme.palette.primary.main};
`;
