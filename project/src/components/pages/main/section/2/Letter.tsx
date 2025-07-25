import { useSection2Store } from "@/store/section/section2Store";
import { Stack, styled, Typography } from "@mui/material";
import { motion } from "motion/react";
import React from "react";

const Letter = () => {
  const { viewVariant, setViewVariant } = useSection2Store();
  
  // 한줄에 최대 23자(공백 포함)
  const sentences = [
    "To. 민주",
    "안녕 민주야",
    "많이 놀랐지?",
    "우리가 함께한 날이 벌써 1000일 되어서",
    "고마운 마음을 어떻게 전할까 고민 많이 했어",
    "고민하던 중에 사진첩을 보다가 떠올랐어",
    "우리가 함께한 날을 같이 추억할 수 있는 '공간'",
    "그런 공간이 있으면 좋겠다고 생각이 들었어",
    "여긴 우리의 추억이 담긴 공간이야",
    "우리가 함께 했던 추억이 담겨있고",
    "앞으로 함께할 미래를 그리고 싶어",
    "민주야",
    "1000일이라는 소중한 시간을",
    "나와 함께 보내줘서 정말 고마워",
    "앞으로도 많이 웃게 해줄게",
    "1000일 축하해 민주야",
    "사랑해♥",
    "From. 동규",
  ];

  const fadinVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sentenceVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  function handleContainerEnter() {
    console.log("안뇽");
  }

  function viewComponent(viewComponent: "closeLetter" | "openLetter" | "letterPaper") {
    switch (viewComponent) {
      case "closeLetter":
        return (
          <CloseLetter
            variants={fadinVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            src={"/img/close-letter.png"}
            onClick={() => setViewVariant("openLetter")}
          />
        );
      case "openLetter":
        return (
          <OpenLetter
            variants={fadinVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            src={"/img/open-letter.png"}
            onClick={() => setViewVariant("letterPaper")}
          />
        );
      case "letterPaper":
        return (
          <LetterPaper
            variants={fadinVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            onClick={() => setViewVariant("closeLetter")}
            onViewportEnter={handleContainerEnter}
          >
            {sentences.map((sentence, index) => (
              <React.Fragment key={index}>
                <Sentence
                  variants={sentenceVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 2 }}
                  align={sentence.includes("From.") ? "right" : "left"}
                >
                  {sentence}
                </Sentence>
                {[4, 7, 10].includes(index) && <br />}
              </React.Fragment>
            ))}
          </LetterPaper>
        );
    }
  }

  return <>{viewComponent(viewVariant)}</>;
};

export default Letter;

const LetterPaper = styled(motion(Stack))`
  width: 350px;
  background-color: white;
  padding: 16px;
  border: 2px solid #dddddd;
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
`;

const Sentence = styled(motion(Typography))``;

const CloseLetter = styled(motion.img)`
  width: 300px;
  height: 200px;
`;

const OpenLetter = styled(motion.img)`
  width: 300px;
`;
