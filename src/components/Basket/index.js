import React from 'react';

import Title from 'src/components/Title';
import BasketItem from './BasketItem';
import Button from 'src/components/Button';

import './basket.scss';

const Basket = () => (
  <div className="basket">
    <div className="basket__current-command">
      <BasketItem name="Salade César" price="6.50€" number="1" />
      <BasketItem name="Burger Bacon" price="10.50€" number="2" />
      <BasketItem name="Salade de fruits" price="5€" number="2" />
      <BasketItem name="Jus Aloe-lemon" price="2.50€" number="1" />
    </div>
    <div className="basket__validation">
      <div className="basket__properties">
        <p className="basket__property">Total</p>
        <p className="basket__property">Total avec livraison</p>
        <p className="basket__property basket__checkbox">Demander des couverts, pailles...</p>
      </div>
      <div className="basket__prices">
        <p className="basket__price">33.50€</p>
        <p className="basket__price total">37.50€</p>
        <input type="checkbox" className="basket__checkbox" />
      </div>
    </div>
    <Button text="Commander" className="button button--colored"/>
  </div>
);

export default Basket;