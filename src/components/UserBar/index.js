import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from 'src/components/Button';

import './userbar.scss';

const UserBar = () => (
  <div className="userbar">
    <NavLink to="/login" exact><Button text="Se connecter" className="button button--colored button--hidden" /></NavLink>
  </div>
);

export default UserBar;