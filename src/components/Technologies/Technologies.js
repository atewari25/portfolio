import React from "react";
import { DiPython, DiReact } from "react-icons/di";
import { FaEthereum } from "react-icons/fa";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <div>
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>I've worked on a range of technologies:</SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>Experience with React.Js</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiPython size="3rem" />
          <ListContainer>
            <ListTitle>Machine Learning</ListTitle>
            <ListParagraph>Experience with CNN</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <FaEthereum size="3rem" />
          <ListContainer>
            <ListTitle>Blockchain</ListTitle>
            <ListParagraph>
              Experience with Ethereum/Smart Contracts
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
