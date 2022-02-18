import React from "react";
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

import { Container } from "../styles/Container.styled";
import logo from "../assets/images/logo.svg"
const StyledHeader = styled("header")`
background-color:#f6f6f6;
height:50px;

`;

interface Props {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Container>
      <div>
        <div>
          <img src={logo} alt="logo"/>

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
