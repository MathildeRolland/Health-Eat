import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ text, className }) => (
  <input className={className} type="submit" value={text} />
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}; 

export default Button;