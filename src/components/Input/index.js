import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, value, name, className }) => (
  <input type={type} value={value} name={name} className={className} />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string.isRequired,
};

export default Input;