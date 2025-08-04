import { mixinSectionContainer } from "@/styles/mixins";
import { Stack, Typography } from "@mui/material";
import styled from "@mui/material/styles/styled";
import React from "react";

const Section6 = () => {
  return (
    <Container>
      <Typography variant="h1" color="primary.main">
        COMING SOON...
      </Typography>
    </Container>
  );
};

export default Section6;

const Container = styled(Stack)`
  ${mixinSectionContainer}
`;
