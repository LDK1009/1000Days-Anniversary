import React from "react";
import html2canvas from "html2canvas";
import styled from "@mui/material/styles/styled";
import { Button, Stack, Typography } from "@mui/material";
import { mixinFlex, mixinMuiButtonNoShadow } from "@/styles/mixins";
import Image from "next/image";

type PropsType = {
  name: string;
  content: string;
  expiration: Date;
};
const Coupon = ({ name, content, expiration }: PropsType) => {
  async function handleDownload() {
    // 요소 선택
    const coupon = document.querySelector(".coupon-container") as HTMLElement;
    // 요소가 없으면 종료
    if (!coupon) return;

    // 요소를 캔버스로 변환
    const canvas = await html2canvas(coupon, {
      scale: 2,
      logging: false,
    });

    // 이미지 데이터 추출
    const imageData = canvas.toDataURL("image/png").split(",")[1];
    // 파일명 설정
    const fileName = `쿠폰.png`;
    // 특수문자를 '_'로  변경
    const safeFileName = fileName.replace(/[\\/:*?"<>|]/g, "_");

    // 다운로드 링크 생성
    const link = document.createElement("a");
    // 다운로드 링크 설정
    link.download = safeFileName;
    // 다운로드 링크 설정
    link.href = `data:image/png;base64,${imageData}`;
    // 다운로드 링크 추가
    document.body.appendChild(link);
    // 다운로드 링크 클릭
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <Container className="coupon-container">
        <Name>{name}</Name>
        <Content>{content}</Content>
        <Expiration>{expiration.toLocaleDateString()}</Expiration>
        <SealImage src="/img/seal.png" alt="seal" width={32} height={32} />
      </Container>
      <DownloadButton variant="contained" onClick={handleDownload}>
        다운로드
      </DownloadButton>
    </>
  );
};

export default Coupon;

const Container = styled(Stack)`
  position: relative;
  ${mixinFlex("column", "space-evenly", "center")}
  width: 100%;
  aspect-ratio: 2/1;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  overflow: hidden;
`;

const Name = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary.dark};
`;

const Content = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Expiration = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const DownloadButton = styled(Button)`
  width: 100%;
  margin-top: 16px;
  ${mixinMuiButtonNoShadow}
`;

const SealImage = styled(Image)`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  transform: rotate(15deg);
  z-index: 10;
`;
