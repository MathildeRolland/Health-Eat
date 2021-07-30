import React from 'react';

import './button.scss';

const Button = ({ text, className }) => (
  <input className={className} type="submit" value={text} />
);

export default Button;