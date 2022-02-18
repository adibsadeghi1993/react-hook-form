import React from 'react'
import TextField from "@material-ui/core/TextField";

import { HeaderContainer, StyledH } from './Form.styled';
import {useForm,SubmitHandler} from "react-hook-form"

type Props = {}

type FormInputs={
  email:string,
  password:string
}

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