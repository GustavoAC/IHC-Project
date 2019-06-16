import React, { Component } from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import Div from "./Div";
import TextInput from "./TextInput";
import colors from "../assets/resources/colors";
import Button from "./Button";
import Text from "./Text";

const styles = {
  formContainer: {
    width: "30%",
    background: colors.white,
    display: "flex",
    flexDirection: "column",
    alignContent: "stretch",
    flexWrap: "wrap",
    border: "1px solid #CFCFCF",
    borderRadius: "4px",

    fontSize: "16px",
    color: "#151515",
    letterSpacing: "0",
    lineHeight: "24px",
    padding: "0 20px 10px"
  },

  picker: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    justifyContent: "center",
    alignItems: "stretch"
  }
};

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <Div style={styles.formContainer}>
        <Div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            alignItems: "center",
            lineHeight: "30px"
          }}
        >
          <Text fontWeight="bold" fontSize="26px">
            Login
          </Text>
          <Text>Continue with Facebook or e-mail</Text>
        </Div>
        <Div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
            justifyContent: "center",
            alignItems: "stretch"
          }}
        >
          <TextInput
            placeholder="E-mail"
            onChange={text =>
              this.setState(prevState => ({ ...prevState, email: text }))
            }
          />

          <TextInput
            placeholder="Password"
            onChange={text =>
              this.setState(prevState => ({ ...prevState, password: text }))
            }
            secured
          />

          <Div
            style={{
              marginTop: "20px",
              flexDirection: "column"
            }}
          >
            <Button type="green" text="Login" onClick={() => {}} />
            <Button
              type="facebook"
              icon={faFacebook}
              text="Continue com o Facebook"
            />
          </Div>
        </Div>
      </Div>
    );
  }
}

FormLogin.propTypes = {
  t: PropTypes.any.isRequired
};

export default FormLogin;
