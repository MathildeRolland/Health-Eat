import React from 'react';
import { NavLink } from 'react-router-dom';

import Burger from 'src/containers/Burger';

import Logo from './Logo.svg';
import './menu.scss';

const Menu = () => (
  <div className="menu">
    <div className="menu__logo-div">
        <NavLink to="/" exact>
          <img className="menu__logo" src={Logo} />
        </NavLink>
    </div>
    <Burger />
  </div>
);

export default Menu;