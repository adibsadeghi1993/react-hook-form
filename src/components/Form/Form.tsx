import React from "react";
import TextField from "@material-ui/core/TextField";
import { yupResolver } from "@hookform/resolvers";
import { HeaderContainer, StyledH } from "./Form.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

type Props = {};

type FormInputs = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("لطفا ایمیل صحیح وارد کنید")
    .required("وارد کردن ایمیل ضروری است"),
    password: yup
    .string()
    .min(6,"حداقل باید شش کاراکتر باشد")
    .required("وارد کردن پسورد ضروری است"),
});

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm<FormInputs>({
    resolver:yupResolver(schema)
  });

  const formSubmitHandler: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data);
  };
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
