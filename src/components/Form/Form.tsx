import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, CheckBoxContainer, HeaderContainer, StyledH } from "./Form.styled";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import { Box, Typography } from "@material-ui/core";

type Props = {};

type FormInputs = {
  email: string;
  password: string;
  save: boolean;
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
  save: yup.boolean(),
});

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    defaultValues:{
      email:"",
      password:"",
      save:true
    }
  });

  const formSubmitHandler: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data);
  };
const values=getValues()
console.log(values)
  console.log(watch("email"));
  return (
    <>
      <HeaderContainer>
        <StyledH>ورود</StyledH>
      </HeaderContainer>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name="email"
          control={control}
          defaultValue={values.email}
          render={({ field }) => (
            <TextField
              variant="standard"
              
              {...field}
              fullWidth
              value={values.email}
              label="نام کاربری/ایمیل"
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ""}
            />
          )}
        />
       <Box sx={{mt:"15px"}}>
       <Controller
          name="password"
          control={control}
          defaultValue={values.password}
          render={({ field }) => (
            <TextField
              variant="standard"
              {...field}
              fullWidth
              label="پسورد"
              value={values.password}
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ""}
            />
          )}
        />
       </Box>

        <CheckBoxContainer>
        <FormControlLabel
        sx={{marginRight:0}}
       
          control={
            <Controller
              control={control}
              name="save"
              defaultValue={true}
              render={({ field: { onChange } }) => (
                <Checkbox
                  color="primary"
                checked={values.save}
                 sx={{p:0}}
                  onChange={(e) => onChange(e.target.checked)}
                />
              )}
            />
          }
          label={
            <p>
              مرا بخاطر بسپار
            </p>
          }
        />
        </CheckBoxContainer>

        <Button type="submit">ارسال</Button>
      </form>
    </>
  );
};

export default Form;
