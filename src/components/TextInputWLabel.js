import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/fontawesome-free-solid';
import colors from '../../assets/resources/colors';

const styles = {
  ok: {
    width: '100%',
    height: '40px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: 'normal',
    backgroundColor: '#F2F2F2',
    color: colors.black,
    outline: 'none',
    textIndent: '10px',
  },

  bottomMargin: {
    marginBottom: '10px',
  },

  error: {
    boxShadow: `0px 0px 0px 1px ${colors.red}`,
  },
};

const TextInputWLabel = (props) => {
  const {
    validator, secured, label, noBottomMargin, placeholder, tip, value, onChange,
  } = props;

  const styleError = validator(value) ? {} : styles.error;
  const styleMargin = noBottomMargin ? {} : styles.bottomMargin;
  const style = { ...styles.ok, ...styleError, ...styleMargin };
  const type = secured ? 'password' : 'text';

  const tipItem = tip ? (
    <FontAwesomeIcon title={tip} icon={faQuestionCircle} color={colors.black} />
  ) : null;

  const myOnChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <label style={{ color: colors.black, width: '100%' }}>
      {label}
      {' '}
      {tipItem}
      <input
        value={value}
        onChange={myOnChange}
        placeholder={placeholder}
        type={type}
        style={style}
      />
    </label>
  );
};

TextInputWLabel.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secured: PropTypes.bool,
  value: PropTypes.any.isRequired,
  validator: PropTypes.func,
  noBottomMargin: PropTypes.bool,
  tip: PropTypes.string,
};

TextInputWLabel.defaultProps = {
  secured: false,
  validator: () => true,
  onChange: () => {},
  noBottomMargin: false,
  placeholder: '',
  tip: undefined,
};

export default TextInputWLabel;
