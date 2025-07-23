import { mixinSectionContainer } from "@/styles/mixins";
import { Stack, StackProps, styled } from "@mui/material";
import React from "react";

interface SectionProps extends StackProps {
  id?: string;
}

const Section = ({ children, id, ...props }: SectionProps) => {
  return (
    <Container id={id} {...props}>
      {children}
    </Container>
  );
};

export default Section;

const Container = styled(Stack)`
  ${mixinSectionContainer}
`; 