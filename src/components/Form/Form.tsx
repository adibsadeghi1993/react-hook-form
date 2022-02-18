import React from "react";
import TextField from "@material-ui/core/TextField";

import { HeaderContainer, StyledH } from "./Form.styled";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type FormInputs = {
  email: string;
  password: string;
};

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm<FormInputs>();

  const formSubmitHandler:SubmitHandler<FormInputs> =(data:FormInputs)=>{
    console.log(data)
  }
  return (
    <>
      <HeaderContainer>
        <StyledH>ورود</StyledH>
      </HeaderContainer>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <TextField variant="standard" fullWidth label="نام کاربری/ایمیل" />
        <TextField variant="standard" fullWidth label="نام کاربری/ایمیل" />
        <button type="submit">ارسال</button>
      </form>
    </>
  );
};

export default Form;
