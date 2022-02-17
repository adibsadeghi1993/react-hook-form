import React from "react";
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

const Div = styled(Box)`
  background-color: red;
  color: white;
`;

interface Props {}

const Header = (props: Props) => {
  return (
    <Div>
      <h1>hi react</h1>
    </Div>
  );
};

export default Header;
