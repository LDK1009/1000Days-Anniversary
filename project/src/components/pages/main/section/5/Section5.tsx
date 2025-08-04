import { mixinFlex, mixinMuiButtonNoShadow, mixinSectionContainer } from "@/styles/mixins";
import { AutoAwesomeRounded, CloseRounded } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import styled from "@mui/material/styles/styled";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import Coupon from "./Coupon";
import { getRandomInt } from "@/utils/random";

const Section5 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [couponData, setCouponData] = useState<{ name: string; content: string; expiration: Date } | null>(null);

  const BoxAnimationVariants = {
    initial: {
      y: 0,
      rotate: 0,
      scale: 1,
    },
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    open: {
      y: [0, -50, -30],
      rotate: [0, 360, 720],
      scale: [1, 1.2, 1.1],
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
      },
    },
  };

  const handleButtonClick = () => {
    setIsClicked(true);
    setCouponData(couponDatas[getRandomInt(0, couponDatas.length - 1)]);
  };

  const currentDate = new Date();
  const expirationOneYear = new Date(currentDate.setDate(currentDate.getDate() + 365));

  const couponDatas = [
    {
      name: "전신 마사지 쿠폰",
      content: "민주가 원하는 부위, 원하는 강도로 전신 마사지 해줄게! 💆‍♀️",
      expiration: expirationOneYear,
    },
    {
      name: "상체 마사지 쿠폰",
      content: "목, 어깨, 등까지 시원하게 풀어주는 상체 마사지! 💆‍♀️",
      expiration: expirationOneYear,
    },
    { name: "하체 마사지 쿠폰", content: "종아리부터 허벅지까지 꼼꼼히 케어! 👣", expiration: expirationOneYear },
    { name: "두피 마사지 쿠폰", content: "손끝으로 전해지는 두피 힐링! 🌿", expiration: expirationOneYear },
    { name: "손 마사지 쿠폰", content: "피곤한 손을 위한 작은 힐링! ✋", expiration: expirationOneYear },
    { name: "발 마사지 쿠폰", content: "종일 고생한 발에 감사하는 시간! 👣", expiration: expirationOneYear },
    { name: "뽀뽀 무제한 쿠폰", content: "부르면 언제든지 뽀뽀해줄게! 😘", expiration: expirationOneYear },
    { name: "백허그 쿠폰", content: "뒤에서 꼭 안아주는 포근함! 🤗", expiration: expirationOneYear },
    { name: "손잡아주기 쿠폰", content: "불안할 땐 이 쿠폰으로 손잡기! ✋", expiration: expirationOneYear },
    { name: "등 토닥토닥 쿠폰", content: "기분 울적할 때 등을 토닥토닥! 🙆‍♀️", expiration: expirationOneYear },
    { name: "눈 마주치기 10초 쿠폰", content: "말 없이 마음을 전해줄게! 👀", expiration: expirationOneYear },
    { name: "안아주기 1분 쿠폰", content: "묵묵히 안아줄게! 🫂", expiration: expirationOneYear },
    {
      name: "데이트 픽권 쿠폰",
      content: "오늘 하루 데이트는 민주가 하고 싶은 대로! 🎡",
      expiration: expirationOneYear,
    },
    { name: "데이트 드라이브 쿠폰", content: "드라이브 음악까지 준비 완료 🚗", expiration: expirationOneYear },
    { name: "감성 영화 쿠폰", content: "담요+팝콘+감성영화 SET 🎬", expiration: expirationOneYear },
    {
      name: "간식 서프라이즈 쿠폰",
      content: "좋아하는 간식+음료 조합으로 행복 충전 🍫🧋",
      expiration: expirationOneYear,
    },
    { name: "브런치 만들어주기 쿠폰", content: "아침 겸 점심 맛있게 차려줄게 🍳", expiration: expirationOneYear },
    { name: "카페 데려다주기 쿠폰", content: "민주가 좋아하는 카페로 🧋", expiration: expirationOneYear },
    { name: "사진 찍어주기 쿠폰", content: "인생샷 보장 📸", expiration: expirationOneYear },
    { name: "오글멘트 날리기 쿠폰", content: "심장폭격 멘트 난사 💥", expiration: expirationOneYear },
    {
      name: "배경화면 만들어주기 쿠폰",
      content: "민주 사진으로 예쁜 배경 만들어줄게! 🖼️",
      expiration: expirationOneYear,
    },
    { name: "편지 써주기 쿠폰", content: "진심을 담은 손편지 써줄게! 💌", expiration: expirationOneYear },
    { name: "노래 불러주기 쿠폰", content: "라이브 콘서트 오픈! 🎤", expiration: expirationOneYear },
    { name: "장보기 같이 가기 쿠폰", content: "장보기도 데이트! 🍅", expiration: expirationOneYear },
    { name: "집 청소 도와주기 쿠폰", content: "바닥부터 창틀까지 청소해줄게! ✨", expiration: expirationOneYear },
    { name: "한솥밥 해먹기 쿠폰", content: "같이 요리해서 먹기! 🍚", expiration: expirationOneYear },
    { name: "하루종일 민주따라 쿠폰", content: "오늘은 민주따라 움직이기! 🚶‍♂️", expiration: expirationOneYear },
    { name: "불만 없이 YES맨 쿠폰", content: "무조건 다 해줄게! ✅", expiration: expirationOneYear },
    { name: "바람 쐬러 나가기 쿠폰", content: "산책하러 가자! 🌿", expiration: expirationOneYear },
    { name: "야식 배달 쿠폰", content: "오늘은 민주가 먹고 싶은 걸로! 🍗", expiration: expirationOneYear },
    { name: "밥 먹여주기 쿠폰", content: "귀찮을 땐 내가 해줄게! 🍽️", expiration: expirationOneYear },
    {
      name: "1인칭 시점 브이로그 쿠폰",
      content: "민주의 일상을 브이로그로 찍어줄게! 🎥",
      expiration: expirationOneYear,
    },
    { name: "인형뽑기 대신 해주기 쿠폰", content: "꼭 뽑아줄게! 🧸", expiration: expirationOneYear },
    { name: "무제한 칭찬 쿠폰", content: "마구마구 칭찬 폭탄 날리기! 💥", expiration: expirationOneYear },
    { name: "고민 들어주기 쿠폰", content: "나는 무조건 민주 편이야! 💬", expiration: expirationOneYear },
    { name: "소확행 들어주기 쿠폰", content: "민주의 소확행을 들어줄게! 🎁", expiration: expirationOneYear },
    { name: "코디 추천 쿠폰", content: "오늘은 내가 민주 전담 스타일리스트! 👗", expiration: expirationOneYear },
  ];

  return (
    <Container>
      <ImageWrapper variants={BoxAnimationVariants} initial="initial" animate={isClicked ? "open" : "float"}>
        <Image src="/img/question.png" alt="question" fill />
      </ImageWrapper>
      <CouponButton
        variant="contained"
        startIcon={<AutoAwesomeRounded />}
        onClick={handleButtonClick}
        disabled={isClicked}
      >
        {isClicked ? "쿠폰 뽑기 완료!" : "쿠폰 뽑기!"}
      </CouponButton>
      {isClicked && (
        <Layer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <CloseIcon onClick={() => setIsClicked(false)} />
          {couponData && <Coupon {...couponData} />}
        </Layer>
      )}
    </Container>
  );
};

export default Section5;

const Container = styled(Stack)`
  ${mixinSectionContainer}
  padding: 0px 32px;
`;

const ImageWrapper = styled(motion(Stack))`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
`;

const CouponButton = styled(Button)`
  margin-top: 16px;
  width: 200px;
  ${mixinMuiButtonNoShadow}
  font-size: 20px;
`;

const Layer = styled(motion(Stack))`
  ${mixinFlex("column", "center", "center")}
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0px 32px;
  background-color: #ffffff;
  z-index: 100;
`;

const CloseIcon = styled(CloseRounded)`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 101;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.main};
`;
