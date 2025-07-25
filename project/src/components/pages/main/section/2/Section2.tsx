import { mixinSectionContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import React from "react";
import Letter from "./Letter";
import BackLayer from "./BackLayer";
import { useSection2Store } from "@/store/section/section2Store";

const Section2 = () => {
  const { viewVariant } = useSection2Store();
  return (
    <Container id="section2">
      {viewVariant === "closeLetter" && <BackLayer />}
      <Letter />
    </Container>
  );
};

export default Section2;

const Container = styled(Stack)`
  ${mixinSectionContainer}
  position: relative;
`;
