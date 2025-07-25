import { mixinFlex } from "@/styles/mixins";
import { PhotoInfoType } from "@/types/photo";
import { Stack, styled, Typography } from "@mui/material";
import { motion } from "motion/react";
import React from "react";

type PropsType = {
  photoInfo: PhotoInfoType;
};

const PhotoCard = ({ photoInfo }: PropsType) => {
  const jumpTextVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, -4, 0],
    },
  };

  return (
    <Container>
      <Wrapper1>
        <Header>
          <Typography variant="caption">{photoInfo.date}</Typography>
          <Typography variant="caption">{photoInfo.location}</Typography>
        </Header>
        <PhotoImage src={photoInfo.src} alt="photo" />
      </Wrapper1>
      <Wrapper2>
        <Title variant="h6">
          {photoInfo.title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={jumpTextVariants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.25,
                delay: index * 0.1 + 1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </Title>
        <Content variant="body1">{photoInfo.content}</Content>
      </Wrapper2>
    </Container>
  );
};

export default PhotoCard;

const Container = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  row-gap: 16px;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  padding: 16px;
  transform-style: preserve-3d;
  backface-visibility: visible;
`;

const Wrapper1 = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  width: 100%;
`;
const Wrapper2 = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  width: 100%;
  row-gap: 4px;
`;

const Header = styled(Stack)`
  ${mixinFlex("row", "space-between", "center")}
  width: 100%;
`;

const PhotoImage = styled("img")`
  width: 100%;
  height: 100%;
  max-height: 300px;
`;

const Title = styled(Typography)`
  ${mixinFlex("row", "center", "center")}
  width: 100%;
`;

const Content = styled(Typography)`
  ${mixinFlex("column", "center", "center")}
  width: 100%;
`;
