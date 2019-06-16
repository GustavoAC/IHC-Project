import React from 'react';
import PropTypes from 'prop-types';

const InputRadio = ({ label, id, name }) => (
  <span style={{ margin: '0 15px' }}>
    <input id={id} name={name} type="radio" />
    {' '}
    <label htmlFor={id}>{label}</label>
  </span>
);

InputRadio.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputRadio;
