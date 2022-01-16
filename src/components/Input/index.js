import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import InfoBox from '../InfoBox/InfoBox';

// == STYLE
import './input.scss';

const Input = ({
  type,
  // name,
  label,
  placeholder,
  value,
  // handleChange,
  onChange,
  error = false,
  errorDetails
}) => {
  const className = error ? 'input__input input__input--error' : 'input__input';

  return (
    <div className="input-container">
      <div className="input">
        <label className="input__label" htmlFor={name}>{label}</label>
        <input
          className={className}
          type={type}
          // name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          // onChange={(evt) => {handleChange(evt.target.value)}}
        />
      </div>
      {
        !!errorDetails && <InfoBox className="infobox infobox--error" info={errorDetails}/>
      }
    </div>
  );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
};

export default Input;