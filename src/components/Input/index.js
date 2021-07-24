import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({ type, name, label}) => (
  <div className="input">
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name} />
  </div>
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Input;