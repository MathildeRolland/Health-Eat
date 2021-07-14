import React from 'react';

import plusIcon from './172525_plus_icon.svg';
import './form.scss';

const Form = () => (
  <form className="form">
    <input type="number" className="form__input--number" value="1" />
    <input type="submit" className="form__submit material-icons" value="+" />
  </form>
);

export default Form;