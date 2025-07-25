import PhotoCard from "./PhotoCard";
import { mixinFlex, mixinMuiButtonNoShadow } from "@/styles/mixins";
import { PhotoInfoType } from "@/types/photo";
import { Button, Stack, styled } from "@mui/material";
import { motion } from "motion/react";
import React, { useState } from "react";

type PropsType = {
  photoInfo: PhotoInfoType;
  setIsView: (isView: boolean) => void;
};

const Photo = ({ photoInfo, setIsView }: PropsType) => {
  const [pageMode, setPageMode] = useState(false);

  const MiniPhotoVariants = {
    initial: { y: 25 },
    moveUp: {
      y: -75,
      transition: { duration: 5, delay: 1 },
    },
  };

  const PagePhotoVariants = {
    initial: { opacity: 0 },
    scaleUp: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  function handleAnimationComplete(definition: string) {
    if (definition === "moveUp") {
      setPageMode(true);
    }
  }

  return (
    <>
      {pageMode ? (
        <PagePhoto variants={PagePhotoVariants} initial="initial" animate="scaleUp">
          <PhotoCard photoInfo={photoInfo} />
          <CloseButton
            variant="contained"
            onClick={() => {
              setIsView(false);
              setPageMode(false);
            }}
          >
            닫기
          </CloseButton>
        </PagePhoto>
      ) : (
        <MiniPhoto
          variants={MiniPhotoVariants}
          initial="initial"
          animate="moveUp"
          onAnimationComplete={handleAnimationComplete}
        >
          <PhotoFrame src={photoInfo.src} alt="photo" />
        </MiniPhoto>
      )}
    </>
  );
};

export default Photo;

const MiniPhoto = styled(motion(Stack))`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
`;

const PhotoFrame = styled("img")`
  width: 100%;
  height: 100%;
`;

const PagePhoto = styled(motion(Stack))`
  position: fixed;
  z-index: 3;
  top: 0px;
  left: 0px;

  ${mixinFlex("column", "center", "center")}
  width: 100vw;
  height: 100vh;

  background-color: white;
`;

const CloseButton = styled(Button)`
  margin-top: 16px;
  width: 300px;
  ${mixinMuiButtonNoShadow}
`;
