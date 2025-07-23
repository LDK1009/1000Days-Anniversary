import { mixinFlex, mixinMuiButtonNoShadow } from "@/styles/mixins";
import { Button, styled } from "@mui/material";
import React from "react";
import Section from "@/components/common/Section";
import Title from "./container/Title";

const Section1 = () => {
  const handleClick = () => {
    const section2 = document.getElementById("section2");
    section2?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section sx={{ justifyContent: "center", rowGap: "48px" }}>
      <Title />
      <StyledButton variant="contained" onClick={handleClick}>
        공쥬 입장
      </StyledButton>
    </Section>
  );
};

export default Section1;

const StyledButton = styled(Button)`
  ${mixinMuiButtonNoShadow}
`;
