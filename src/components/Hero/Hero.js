import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Amit Tewari's Portfolio
      </SectionTitle>
      <SectionText>
        Experienced Software Engineer with a demonstrated history of working in
        the information technology industry. Skilled in Application & Web
        Development, Blockchain enthusiast. Strong engineering professional with
        a Masters of Technology focused in Software Engineering from Motilal
        Nehru National Institute Of Technology. Currently working as a Software
        Developer at Netapp.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/atewari25/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
