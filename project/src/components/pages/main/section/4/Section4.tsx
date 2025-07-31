import { mixinHideScrollbar, mixinSectionContainer } from "@/styles/mixins";
import { Grid2, Stack } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import Album from "./Album";
import { lotteWorldPhotos } from "@/data/lotte-word";

const Section4 = () => {
  return (
    <Container>
      <AlbumContainer container spacing={2}>
        <Grid2 size={12}>
          <Album
            albumData={lotteWorldPhotos}
            albumName="롯데월드"
            albumIntroduce="두근두근 롯데월드 교복 데이트❤"
            size="large"
          />
        </Grid2>
        <Grid2 size={6}>
          <Album albumData={lotteWorldPhotos} albumName="롯데월드" albumIntroduce="두근두근 롯데월드 교복 데이트❤" />
        </Grid2>
        <Grid2 size={6}>
          <Album albumData={lotteWorldPhotos} albumName="롯데월드" albumIntroduce="두근두근 롯데월드 교복 데이트❤" />
        </Grid2>
        <Grid2 size={12}>
          <Album
            albumData={lotteWorldPhotos}
            albumName="롯데월드"
            albumIntroduce="두근두근 롯데월드 교복 데이트❤"
            size="large"
          />
        </Grid2>
        <Grid2 size={6}>
          <Album albumData={lotteWorldPhotos} albumName="롯데월드" albumIntroduce="두근두근 롯데월드 교복 데이트❤" />
        </Grid2>
        <Grid2 size={6}>
          <Album albumData={lotteWorldPhotos} albumName="롯데월드" albumIntroduce="두근두근 롯데월드 교복 데이트❤" />
        </Grid2>
        <Grid2 size={12}>
          <Album
            albumData={lotteWorldPhotos}
            albumName="롯데월드"
            albumIntroduce="두근두근 롯데월드 교복 데이트❤"
            size="large"
          />
        </Grid2>
        <Grid2 size={6}>
          <Album albumData={lotteWorldPhotos} albumName="롯데월드" albumIntroduce="두근두근 롯데월드 교복 데이트❤" />
        </Grid2>
        <Grid2 size={6}>
          <Album albumData={lotteWorldPhotos} albumName="롯데월드" albumIntroduce="두근두근 롯데월드 교복 데이트❤" />
        </Grid2>
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
