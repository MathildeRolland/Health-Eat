import React from 'react';

import Badge from './Badge';
import Cards from 'src/components/Cards';

import './category.scss';

const Category = ({ categoryTitle, meals }) => (
  <div className="category">
    <Badge categoryTitle={categoryTitle} />
    <Cards meals={meals} />
  </div>
);

export default Category;