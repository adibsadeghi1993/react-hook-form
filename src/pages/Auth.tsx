import React from "react";
import Form from "../components/Form";

import { FormContainer, Main } from "../styles/Auth.styled";
import signupImage from "../assets/images/image (1).svg"

type Props = {};

const Auth = (props: Props) => {
  return (
    <Main>
      <FormContainer>
          <Form/>
      </FormContainer>
      <div>
          <img src={signupImage} alt="signup"/>
      </div>
    </Main>
  );
};

export default Auth;
