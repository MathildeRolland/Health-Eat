import React from 'react';

import glutenIcon from './4694936_allergens_allergy_badge_gluten_label_icon.svg';
import './tag.scss';

const Tag = () => (
  <div className="tag">
    <img className="tag__icon" src={glutenIcon} alt="logo" />
  </div>
);

export default Tag;