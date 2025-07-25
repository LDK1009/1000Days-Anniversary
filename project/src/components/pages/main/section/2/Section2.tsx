import React, { useState } from "react";
import Image from "next/image";
import { Button, Stack, styled } from "@mui/material";
import { mixinFlex, mixinMuiButtonNoShadow, mixinSectionContainer } from "@/styles/mixins";
import { CameraAltRounded } from "@mui/icons-material";
import { motion } from "motion/react";
import Photo from "./Photo";
import { PhotoInfoType } from "@/types/photo";

const Section2 = () => {
  const [isFlash, setIsFlash] = useState(false);
  const [isPhotoView, setIsPhotoView] = useState(false);
  const flashTime = 2000;

  function handleFilming() {
    setIsFlash(true);
    setTimeout(() => {
      setIsFlash(false);
    }, flashTime + 100);
    setTimeout(() => {
      setIsPhotoView(true);
    }, flashTime + 1000);

    setIsPhotoView(true);
  }

  const samplePhotoInfo: PhotoInfoType = {
    src: "https://cdn.pixabay.com/photo/2014/12/07/09/30/milky-way-559641_960_720.jpg",
    date: "2025.01.01",
    location: "서울/관악구",
    title: "맛도리 크리므 파스타",
    content: "맛도리 크리므 파스타는 맛도리 크리므 파스타입니다.",
  };
  return (
    <Container id="section2">
      <ImageWrapper>
        <CameraImage src="/svg/polaroid.svg" alt="polaroid" fill />
        {isPhotoView && <Photo photoInfo={samplePhotoInfo} setIsView={setIsPhotoView} />}
      </ImageWrapper>
      <StyledButton variant="contained" startIcon={<CameraAltRounded />} onClick={isFlash ? undefined : handleFilming}>
        찰칵!
      </StyledButton>
      {isFlash && (
        <FlashLayer initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: flashTime / 1000 }} />
      )}
    </Container>
  );
};

export default Section2;

const Container = styled(Stack)`
  ${mixinSectionContainer}
  row-gap: 16px;
`;

const ImageWrapper = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  position: relative;
  width: 300px;
  height: 300px;
`;

const CameraImage = styled(Image)`
  z-index: 2;
`;

const StyledButton = styled(Button)`
  width: 150px;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  ${mixinMuiButtonNoShadow}
`;

const FlashLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  pointer-events: none;
  z-index: 100;
`;
