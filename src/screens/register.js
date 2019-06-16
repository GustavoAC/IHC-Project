import React from "react";

import FormSignup from "../components/FormSignup";
import Div from "../components/Div";

const Register = () => {
  return (
    <Div
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <FormSignup />
    </Div>
  );
};

export default Register;
