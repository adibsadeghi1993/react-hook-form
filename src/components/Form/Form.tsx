import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  CheckBoxContainer,
  HeaderContainer,
  StyledH,
} from "./Form.styled";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import { Box, Typography } from "@material-ui/core";
import Inputs from "../Inputs";
import FormInputs from "../../model/InputTypes";

type Props = {};

// type FormInputs = {
//   email: string;
//   password: string;
//   save: boolean;
// };

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
    defaultValues: {
      email: "",
      password: "",
      save: true,
    },
  });

  const formSubmitHandler: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data);
  };
  const values = getValues();
  console.log(values);
  console.log(watch("email"));
  return (
    <>
      <HeaderContainer>
        <StyledH>ورود</StyledH>
      </HeaderContainer>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Inputs
          label="نام کاربری/ایمیل"
          error={errors.email?.message}
          name="email"
          control={control}
        />
        <Box sx={{ mt: "15px" }}>
          <Inputs
            label="پسورد"
            error={errors.password?.message}
            name="password"
            control={control}
          />
        </Box>

        <CheckBoxContainer>
          <FormControlLabel
            sx={{ marginRight: 0 }}
            control={
              <Controller
                control={control}
                name="save"
                defaultValue={true}
                render={({ field: { onChange } }) => (
                  <Checkbox
                    color="primary"
                    checked={values.save}
                    sx={{ p: 0 }}
                    onChange={(e) => onChange(e.target.checked)}
                  />
                )}
              />
            }
            label={<p>مرا بخاطر بسپار</p>}
          />
        </CheckBoxContainer>

        <Button type="submit">ارسال</Button>
      </form>
    </>
  );
};

export default Form;
