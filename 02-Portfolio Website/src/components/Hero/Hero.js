import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        My purpose is to become an expert full stack developer
      </SectionText>
      <Button onClick={() => (window.location = "https://www.google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
