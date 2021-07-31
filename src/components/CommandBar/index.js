import React from 'react';
import { NavLink } from 'react-router-dom';
import Input from 'src/components/Input';
import Button from 'src/components/Button';

import './commandbar.scss';

const CommandBar = () => (
  <div className="commandbar">
    <Input
        type="text"
        name="foodsearch"
        placeholder="Une envie?"
        value=""
    />
    <NavLink to="/panier" exact>
      <Button text="Panier" className="button button--dark"/>
    </NavLink>
  </div>
);

export default CommandBar;