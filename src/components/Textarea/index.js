import React from 'react';

// COMPONENTS
import InfoBox from '../InfoBox/InfoBox';

// == STYLE
import './textarea.scss';

const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  error = false,
  errorDetails,
}) => (
  <div className="textarea-container">
    <div className="textarea">
      <label className="textarea__label" htmlFor={name}>{label}</label>
      <textarea
        className={error ? "textarea__textarea textarea__textarea--error" : "textarea__textarea"}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
    {
      !!errorDetails && <InfoBox className="infobox infobox--error" info={errorDetails}/>
    }
  </div>
);

export default Textarea;