import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Input from 'src/components/Input';
import Button from 'src/components/Button';

import './commandbar.scss';

const CommandBar = () => {
  const location = useLocation();

  return (
    <div className="commandbar">
      <Input
          type="text"
          name="foodsearch"
          placeholder="Une envie?"
          value=""
      />
      <NavLink to={{
        pathname: "/panier",
        state: { background: location }
      }}>
        <Button text="Panier" className="button button--dark" />
      </NavLink>
    </div>
  );
};

export default CommandBar;