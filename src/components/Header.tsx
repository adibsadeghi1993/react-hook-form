import React from "react";
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import TextField from "@material-ui/core/TextField"

const Div = styled(Box)`
background-color:red;
`;

interface Props {}

const Header = (props: Props) => {
  return (
    <Div>
      <h1>hi react</h1>
      <TextField label="Name" variant="standard" />
    </Div>
  );
};

export default Header;
