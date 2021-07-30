import React from 'react';
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
    <Button text="Panier" className="button button--dark"/>
  </div>
);

export default CommandBar;