import React, { useState } from "react";
import Image from "next/image";
import { Button, Stack, styled } from "@mui/material";
import { mixinFlex, mixinMuiButtonNoShadow, mixinSectionContainer } from "@/styles/mixins";
import { CameraAltRounded } from "@mui/icons-material";
import { motion } from "motion/react";
import Photo from "./Photo";
import { PhotoInfoType } from "@/types/photo";
import { busanPhotos } from "@/data/busan";
import { couppleringPhotos } from "@/data/coupplering";
import { daldongnaePhotos } from "@/data/daldongnae";
import { donggoongNworgePhotos } from "@/data/donggoong-n-worge";
import { garosugilPhotos } from "@/data/garosugil";
import { gwangjuPhotos } from "@/data/gwangju";
import { gwangmyeongPhotos } from "@/data/gwangmyeong";
import { gyungjuWorldPhotos } from "@/data/gyungju-world";
import { hangangPhotos } from "@/data/hangang";
import { haslaArtworldPhotos } from "@/data/hasla-artworld";
import { hongdaePhotos } from "@/data/hongdae";
import { insaPhotos } from "@/data/insa";
import { jejuPhotos } from "@/data/jeju";
import { jungleMediaPhotos } from "@/data/jungle-media";
import { junjuPhotos } from "@/data/junju";
import { kyungbokgoongPhotos } from "@/data/kyungbokgoong";
import { lotteWorldPhotos } from "@/data/lotte-word";
import { lotteWorld2Photos } from "@/data/lotteworld2";
import { minsokchonPhotos } from "@/data/minsokchon";
import { spabisePhotos } from "@/data/spabise";
import { universalSnowPhotos } from "@/data/universal-snow";
import { vietnamPhotos } from "@/data/vietnam";
import { zolupPhotos } from "@/data/zolup";
import { getRandomInt } from "@/utils/random";

const Section3 = () => {
  const [isFlash, setIsFlash] = useState(false);
  const [isPhotoView, setIsPhotoView] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoInfoType | null>(null);
  const flashTime = 2000;

  const AllPhotos = [
    ...busanPhotos,
    ...couppleringPhotos,
    ...daldongnaePhotos,
    ...donggoongNworgePhotos,
    ...garosugilPhotos,
    ...gwangjuPhotos,
    ...gwangmyeongPhotos,
    ...gyungjuWorldPhotos,
    ...hangangPhotos,
    ...haslaArtworldPhotos,
    ...hongdaePhotos,
    ...insaPhotos,
    ...jejuPhotos,
    ...jungleMediaPhotos,
    ...junjuPhotos,
    ...kyungbokgoongPhotos,
    ...lotteWorldPhotos,
    ...lotteWorld2Photos,
    ...minsokchonPhotos,
    ...spabisePhotos,
    ...universalSnowPhotos,
    ...vietnamPhotos,
    ...zolupPhotos,
  ];

  function handleFilming() {
    // 사진을 한 번만 선택하고 고정
    if (!selectedPhoto) {
      const randomPhoto: PhotoInfoType = AllPhotos[getRandomInt(0, AllPhotos.length - 1)];
      setSelectedPhoto(randomPhoto);
    }

    setIsFlash(true);
    setTimeout(() => {
      setIsFlash(false);
    }, flashTime + 100);
    setTimeout(() => {
      setIsPhotoView(true);
    }, flashTime + 1000);

    setIsPhotoView(true);
  }
  // const samplePhotoInfo: PhotoInfoType = {
  //   src: "https://cdn.pixabay.com/photo/2014/12/07/09/30/milky-way-559641_960_720.jpg",
  //   date: "2025.01.01",
  //   location: "서울/관악구",
  //   title: "맛도리 크리므 파스타",
  //   content: "맛도리 크리므 파스타는 맛도리 크리므 파스타입니다.",
  // };
  return (
    <Container>
      <ImageWrapper>
        <CameraImage src="/svg/polaroid.svg" alt="polaroid" fill />
        {isPhotoView && selectedPhoto && (
          <Photo
            photoInfo={selectedPhoto}
            setIsView={(isView) => {
              setIsPhotoView(isView);
              if (!isView) {
                setSelectedPhoto(null);
              }
            }}
          />
        )}
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

export default Section3;

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
