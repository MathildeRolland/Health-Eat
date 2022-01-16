import React from 'react';

import Card from 'src/containers/Card';
import datas from '../../datas';

// == STYLES
import './cards.scss';

const Cards = ({ meals }) => (
  <div className="cards">
    {
      meals.map((meal) => (<Card meal={meal} key={meal.id} />))
    }
  </div>
);

export default Cards;