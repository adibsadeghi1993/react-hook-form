import React from "react";
import TextField from "@material-ui/core/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { HeaderContainer, StyledH } from "./Form.styled";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
    .min(6, "حداقل باید شش کاراکتر باشد")
    .required("وارد کردن پسورد ضروری است"),
});

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data);
  };

  console.log(watch("email"))
  return (
    <>
      <HeaderContainer>
        <StyledH>ورود</StyledH>
      </HeaderContainer>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              variant="standard"
             
              {...field}
              fullWidth
              label="نام کاربری/ایمیل"
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ""}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              variant="standard"
              {...field}
              fullWidth
              label="پسورد"
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ""}
            />
          )}
        />

        <button type="submit">ارسال</button>
      </form>
    </>
  );
};

export default Form;
