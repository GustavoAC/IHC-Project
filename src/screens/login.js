import React from "react";

import FormLogin from "../components/FormLogin";
import Div from "../components/Div";

const Login = () => {
  return (
    <Div
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <FormLogin />
    </Div>
  );
};

export default Login;
