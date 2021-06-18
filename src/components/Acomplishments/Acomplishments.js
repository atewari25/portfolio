import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 5, text: "star at problem solving on Hackerrank" },
  { number: 341, text: "Rank in September Easy’2019, Hackerearth" },
  { number: 97.6, text: "percentile in GATE 2019" },
  { number: 5.6, text: "thousand subscriber on Youtube Channel" },
];

const Acomplishments = () => (
  <div>
    <Section>
      <SectionTitle>Personal Acomplishments</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  </div>
);

export default Acomplishments;
