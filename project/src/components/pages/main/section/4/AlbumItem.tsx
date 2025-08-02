import { mixinFlex } from "@/styles/mixins";
import { PhotoInfoType } from "@/types/photo";
import { Stack, styled, Typography } from "@mui/material";
import React from "react";

const AlbumItem = ({ itemData }: { itemData: PhotoInfoType }) => {
  return (
    <Container>
      <ImageArea>
        <InfoHeader>
          <HeaderText>{itemData.date}</HeaderText>
          <HeaderText>{itemData.location}</HeaderText>
        </InfoHeader>
        <ItemImage src={itemData.src} alt={itemData.title} />
      </ImageArea>
      <InfoArea>
        <Title>{`" ${itemData.title} "`}</Title>
        <Content>{itemData.content}</Content>
      </InfoArea>
    </Container>
  );
};

export default AlbumItem;

const Container = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 4px rgba(255, 197, 199, 0.5);
  padding: 16px;
`;

const ImageArea = styled(Stack)``;

const ItemImage = styled("img")`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
`;

const InfoArea = styled(Stack)`
  ${mixinFlex("column", "start", "center")}
  width: 100%;
  height: 100%;
  margin-top: 4px;
`;

const InfoHeader = styled(Stack)`
  ${mixinFlex("row", "space-between", "center")}
  width:100%;
  font-size: 10px;
  margin-bottom: 4px;
`;

const HeaderText = styled(Typography)`
  font-size: 8px !important;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const Title = styled(Typography)`
  font-size: 20px;
  color: ${({ theme }) => theme.palette.primary.dark};
`;

const Content = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.primary.main};
`;
