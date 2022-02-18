import React from "react";



import { Container } from "../styles/Container.styled";

import { ImageContainer, StyledHeader } from "../styles/Header.styled";


interface Props {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Container>
        <div>
         <div>
         <ImageContainer>
            <img
              src="https://pauth.nextaibox.com/auth/resources/4dapz/login/aibox/img/download.svg"
              alt="logo"
            />
          </ImageContainer>
          <ImageContainer>
            <img
              src="https://pauth.nextaibox.com/auth/resources/4dapz/login/aibox/img/download%20(1).svg"
              alt="logo"
            />
          </ImageContainer>
         </div>
          <ul>
            <li>
              <a href="#">خانه</a>
            </li>
            <li>
              <a href="#">محصولات</a>
            </li>
            <li>
              <a href="#">مارکت API</a>
            </li>
          </ul>
        </div>
        <div></div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
