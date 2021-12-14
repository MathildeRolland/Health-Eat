import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({
  type,
  name,
  label,
  // register,
  // required,
  placeholder,
  value,
  onChange,
}) => {
  const className = type === 'submit' ? 'input__input input__input--submit' : 'input__input';
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>{label}</label>
      <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        // {...register(name, { required })}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
};

export default Input;