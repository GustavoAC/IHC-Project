import React, { Component } from "react";
import PropTypes from "prop-types";
import colors from "../assets/resources/colors";

const styles = {
  ok: {
    width: "100%",
    height: "40px",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "normal",
    backgroundColor: "#F2F2F2",
    color: colors.black,
    outline: "none",
    textIndent: "10px"
  },

  bottomMargin: {
    marginBottom: "10px"
  },

  error: {
    boxShadow: `0px 0px 0px 1px ${colors.red}`
  }
};

class TextInput extends Component {
  constructor(props) {
    super(props);
    const { defaultVal } = this.props;
    const value = defaultVal || "";
    this.state = { value };
  }

  myOnChange = event => {
    const { onChange = () => {} } = this.props;

    const text = event.target.value;
    this.setState({ value: text });
    onChange(text);
  };

  render() {
    const {
      validator,
      secured,
      placeholder,
      noBottomMargin,
      defaultValue,
      onFocus,
      onBlur
    } = this.props;
    const { value } = this.state;

    const styleError = validator(value) ? {} : styles.error;
    const styleMargin = noBottomMargin ? {} : styles.bottomMargin;
    const style = { ...styles.ok, ...styleError, ...styleMargin };
    const type = secured ? "password" : "text";
    return (
      <input
        value={defaultValue}
        placeholder={placeholder}
        onChange={this.myOnChange}
        type={type}
        style={style}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  secured: PropTypes.bool,
  defaultVal: PropTypes.string,
  validator: PropTypes.func,
  noBottomMargin: PropTypes.bool,
  defaultValue: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

TextInput.defaultProps = {
  secured: false,
  defaultVal: "",
  validator: () => true,
  noBottomMargin: false,
  defaultValue: null,
  onFocus: () => {},
  onBlur: () => {}
};

export default TextInput;
