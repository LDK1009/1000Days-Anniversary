import { mixinHideScrollbar, mixinSectionContainer } from "@/styles/mixins";
import { Grid2, Stack } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import Album from "./Album";
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
import { lotteWorld2Photos } from "@/data/lotteworld2";
import { kyungbokgoongPhotos } from "@/data/kyungbokgoong";
import { minsokchonPhotos } from "@/data/minsokchon";
import { spabisePhotos } from "@/data/spabise";
import { universalSnowPhotos } from "@/data/universal-snow";
import { vietnamPhotos } from "@/data/vietnam";
import { zolupPhotos } from "@/data/zolup";
import { lotteWorldPhotos } from "@/data/lotte-word";

const Section4 = () => {
  const AllAlbums = [
    { albumName: "부산 여행❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: busanPhotos },
    { albumName: "커플링❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: couppleringPhotos },
    { albumName: "추억의 달동네❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: daldongnaePhotos },
    { albumName: "동궁과 월지❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: donggoongNworgePhotos },
    { albumName: "가로수길❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: garosugilPhotos },
    { albumName: "광주 데이트❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: gwangjuPhotos },
    { albumName: "광명동굴❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: gwangmyeongPhotos },
    { albumName: "경주월드❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: gyungjuWorldPhotos },
    { albumName: "한강❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: hangangPhotos },
    { albumName: "하슬라 아트월드❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: haslaArtworldPhotos },
    { albumName: "홍대❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: hongdaePhotos },
    { albumName: "인사동❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: insaPhotos },
    { albumName: "제주도❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: jejuPhotos },
    { albumName: "정글 미디어❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: jungleMediaPhotos },
    { albumName: "전주❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: junjuPhotos },
    { albumName: "경복궁❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: kyungbokgoongPhotos },
    { albumName: "롯데월드1❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: lotteWorldPhotos },
    { albumName: "롯데월드2❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: lotteWorld2Photos },
    { albumName: "민속촌❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: minsokchonPhotos },
    { albumName: "스파비스❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: spabisePhotos },
    { albumName: "눈천향❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: universalSnowPhotos },
    { albumName: "베트남❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: vietnamPhotos },
    { albumName: "졸업❤", albumIntroduce: "두근두근 롯데월드 교복 데이트❤", albumData: zolupPhotos },
  ];

  return (
    <Container>
      <AlbumContainer container spacing={2}>
        {AllAlbums.map((album, index) => {
          if (index % 3 === 0) {
            return (
              <Grid2 size={12} key={`${index}-${album.albumName}`}>
                <Album
                  albumData={album.albumData}
                  albumName={album.albumName}
                  albumIntroduce={album.albumIntroduce}
                  size="large"
                />
              </Grid2>
            );
          } else {
            return (
              <Grid2 size={6} key={`${index}-${album.albumName}`}>
                <Album
                  albumData={album.albumData}
                  albumName={album.albumName}
                  albumIntroduce={album.albumIntroduce}
                  size="small"
                />
              </Grid2>
            );
          }
        })}
      </AlbumContainer>
    </Container>
  );
};

export default Section4;

const Container = styled(Stack)`
  ${mixinSectionContainer}
`;

const AlbumContainer = styled(Grid2)`
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-y: auto;
  ${mixinHideScrollbar}
`;
