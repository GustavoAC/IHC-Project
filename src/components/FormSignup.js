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

const pickerOptions = [
  { label: "Sou atleta", value: "athlete" },
  { label: "Sou fotógrafo", value: "photographer" }
];

class FormSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: pickerOptions[0],
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateOption = option => {
    this.setState(prevState => ({ ...prevState, selectedOption: option }));
  };

  handleInputChange(newValue) {
    this.setState(prevState => ({ ...prevState, ...newValue }));
  }

  handleSubmit() {
    const { signUpRequest } = this.props;
    const { selectedOption } = this.state;
    const data = {
      ...this.state,
      selectedOption: selectedOption.value
    };

    signUpRequest(data);
  }

  render() {
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
            Crie uma conta para ter acesso a mais funções do site!
          </Text>
          <Text>Criar conta</Text>
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
            placeholder="Primeiro Nome"
            onChange={firstName => this.handleInputChange({ firstName })}
          />

          <TextInput
            placeholder="Último Nome"
            onChange={lastName => this.handleInputChange({ lastName })}
          />

          <TextInput
            placeholder="E-mail"
            onChange={email => this.handleInputChange({ email })}
          />

          <TextInput
            placeholder="Senha"
            onChange={password => this.handleInputChange({ password })}
            secured
          />

          <TextInput
            placeholder="Confirmar Senha"
            onChange={confirmPassword =>
              this.handleInputChange({ confirmPassword })
            }
            secured
          />

          <Div
            style={{
              marginTop: "20px",
              flexDirection: "column"
            }}
          >
            <Button type="green" text="Criar conta" href="/" />
            <Button
              type="facebook"
              icon={faFacebook}
              text="Cadastrar com o Facebook"
              href="/"
            />
          </Div>
        </Div>
      </Div>
    );
  }
}

FormSignup.defaultProps = {
  displayPicker: "flex"
};

FormSignup.propTypes = {
  t: PropTypes.any.isRequired,
  displayPicker: PropTypes.string,
  signUpRequest: PropTypes.func.isRequired
};

export default FormSignup;
