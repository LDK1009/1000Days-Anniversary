import { mixinFlex, mixinHideScrollbar } from "@/styles/mixins";
import { Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PhotoInfoType } from "@/types/photo";
import AlbumItem from "./AlbumItem";
import AlbumSwiper from "@/components/pages/main/section/4/AlbumSwiper";
import { SwiperSlide } from "swiper/react";
import { CloseRounded } from "@mui/icons-material";
import { chunk } from "@/utils/chunk";
import type { Swiper as SwiperType } from "swiper";

const Album = ({
  albumData,
  albumName,
  albumIntroduce,
  coverImageIndex = 0,
  size = "small",
}: {
  albumData: PhotoInfoType[];
  albumName: string;
  albumIntroduce: string;
  coverImageIndex?: number;
  size?: "small" | "large";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const detailContainerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const chunkedAlbumData = chunk(albumData, 2);


  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <Conatiner>
      {/* 앨범 커버 */}
      <ConverContainer onClick={() => setIsOpen(true)}>
        <ConverContentContainer>
          <ConverImageWrapper>
            <ConverImage src={albumData[coverImageIndex].src} alt={albumData[coverImageIndex].title} />
            <AlbumName sx={{ fontSize: size === "large" ? "48px" : "24px" }}>{albumName}</AlbumName>
            <ConverImageLayer></ConverImageLayer>
          </ConverImageWrapper>
          <AlbumIntroduce>{albumIntroduce}</AlbumIntroduce>
        </ConverContentContainer>
      </ConverContainer>

      {/* 클릭 시 상세 앨범 오픈 */}
      <AnimatePresence>
        {isOpen && (
          <DetailContainer variants={detailContainerVariants} initial="initial" animate="animate" exit="exit">
            <AlbumSwiper onSlideChange={handleSlideChange}>
              {chunkedAlbumData.map((items, index) => (
                // 사진을 3개씩 묶어서 스와이퍼 아이템으로 만들기
                <SwiperItem key={`${index} chunk`}>
                  <CloseIcon onClick={() => setIsOpen(false)} />
                  {items[0] && <AlbumItem itemData={items[0]} />}
                  {items[1] && <AlbumItem itemData={items[1]} />}
                  {items[2] && <AlbumItem itemData={items[2]} />}
                  <CurrentNumberContainer>
                    {currentIndex + 1} / {chunkedAlbumData.length}
                  </CurrentNumberContainer>
                </SwiperItem>
              ))}
            </AlbumSwiper>
          </DetailContainer>
        )}
      </AnimatePresence>
    </Conatiner>
  );
};

export default Album;

const Conatiner = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  width:100%;
  padding: 8px;
  border-radius: 16px;
  border: 3px solid rgba(255, 197, 199, 0.5);
`;

const ConverContainer = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  width:100%;
  height: 100%;
`;

const ConverContentContainer = styled(Stack)`
  position: relative;
  ${mixinFlex("column", "center", "center")}
  row-gap: 8px;
  width: 100%;
  border-radius: 16px;
`;

const AlbumIntroduce = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
`;

const ConverImageWrapper = styled(Stack)`
  width: 100%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`;

const ConverImageLayer = styled(Stack)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

const ConverImage = styled("img")`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
`;

const AlbumName = styled(Typography)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-15deg);
  z-index: 10;
  color: ${({ theme }) => theme.palette.text.white};
  font-size: 24px;
  font-weight: 600;
  text-shadow: 4px 4px 16px rgba(232, 135, 159, 1);
  width: 100%;
  text-align: center;
`;

const DetailContainer = styled(motion(Stack))`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  ${mixinFlex("column", "start", "center")}
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: white;
  ${mixinHideScrollbar}
`;

const CloseIcon = styled(CloseRounded)`
  position: fixed;
  z-index: 100;
  top: 8px;
  right: 8px;
  color: ${({ theme }) => theme.palette.primary.dark};
`;

const CurrentNumberContainer = styled(Stack)`
  ${mixinFlex("row", "center", "center")}
  position: fixed;
  z-index: 100;
  bottom: 8px;
  right: 8px;
  color: ${({ theme }) => theme.palette.primary.dark};
`;

const SwiperItem = styled(SwiperSlide)`
  position: relative;
  ${mixinFlex("column", "space-between", "center")}
  row-gap: 16px;
  width: 100%;
  height: 100vh;
  padding: 48px;
`;
