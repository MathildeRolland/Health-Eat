import React from 'react';

import Badge from './Badge';
import Cards from 'src/components/Cards';

import './category.scss';

const Category = () => (
  <div className="category">
    <Badge />
    <Cards />
  </div>
);

export default Category;