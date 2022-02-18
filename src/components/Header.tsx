import React from "react";



import { Container } from "../styles/Container.styled";

import {LeftSection,MainContent, ImageContainer, List, LogoConatiner, LogoName, RightSection, StyledHeader } from "../styles/Header.styled";


interface Props {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Container>
        <MainContent>
        <RightSection>
         <LogoConatiner>
         <ImageContainer>
            <img
              src="https://pauth.nextaibox.com/auth/resources/4dapz/login/aibox/img/download.svg"
              alt="logo"
            />
          </ImageContainer>
          <LogoName >
            <img
              src="https://pauth.nextaibox.com/auth/resources/4dapz/login/aibox/img/download%20(1).svg"
              alt="logo"
            />
          </LogoName>
         </LogoConatiner>
          <List>
            <li>
              <a href="#">خانه</a>
            </li>
            <li>
              <a href="#">محصولات</a>
            </li>
            <li>
              <a href="#">مارکت API</a>
            </li>
          </List>
        </RightSection>
        <LeftSection>
          <span><a href="#">ثبت نام</a></span>
          <span><a href="#">ورود</a></span>
        </LeftSection>
        </MainContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
