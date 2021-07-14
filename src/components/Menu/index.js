import React from 'react';

import Burger from './Burger';
import Nav from './Nav';

import Logo from './Logo.svg';
import './menu.scss';

const Menu = () => (
  <div className="menu">
    <div className="menu__logo-div">
        <img className="menu__logo" src={Logo} />
    </div>
    <Burger />
    <Nav />
  </div>
);

export default Menu;