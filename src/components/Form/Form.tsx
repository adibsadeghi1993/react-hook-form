import React from 'react'
import TextField from "@material-ui/core/TextField";
import { Typography } from '@material-ui/core';
import { HeaderContainer, StyledH } from './Form.styled';

type Props = {}

const Form = (props: Props) => {
  return (
    <form>
        <HeaderContainer>
        <StyledH>ورود</StyledH>
        </HeaderContainer>
<TextField variant="standard" fullWidth label="نام کاربری/ایمیل"/>
<TextField variant="standard" fullWidth label="نام کاربری/ایمیل"/>
    </form>
  )
}

export default Form