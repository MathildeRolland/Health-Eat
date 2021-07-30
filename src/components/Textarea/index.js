import React from 'react';

import './textarea.scss';

const Textarea = ({ label, name, placeholder }) => (
  <div className="textarea">
    <label className="textarea__label" htmlFor={name}>{label}</label>
    <textarea className="textarea__textarea" name={name} placeholder={placeholder} />
  </div>
);

export default Textarea;