import React from "react";
import Form from "../../components/Form/Form";

import { FormContainer, Main, SignupImage } from "./Auth.styled";
import signupImage from "../../assets/images/image (1).svg";

type Props = {};

const Auth = (props: Props) => {
  return (
    <Main>
      <FormContainer>
        <Form />
      </FormContainer>
      <SignupImage>
        <img src={signupImage} alt="signup" />
      </SignupImage>
    </Main>
  );
};

export default Auth;
