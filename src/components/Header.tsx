import React from "react";
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import TextField from "@material-ui/core/TextField"
import { Typography } from "@material-ui/core";
import { Container } from "../styles/Container.styled";

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
        <div></div>
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
