import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:tiwariamit6250@gmail.com">
            tiwariamit6250@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Talk is cheap, show me the code</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/atewari25">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/totravelandsing/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/atewari25/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
