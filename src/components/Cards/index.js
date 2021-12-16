import React from 'react';

import Card from 'src/components/Cards/Card';

import './cards.scss';

const Cards = ({ lowCaloriesMeals }) => (
  <div className="cards">
    {
      lowCaloriesMeals.map((meal) => (<Card meal={meal} key={meal.id} />))
    }
  </div>
);

export default Cards;