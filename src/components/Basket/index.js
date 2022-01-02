import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import BasketItem from './BasketItem';
import Button from 'src/components/Button';

import './basket.scss';

const Basket = ({ basket }) => {
  const history = useHistory();
  const basketModal = useRef(null);

  useEffect(() => {
    const handleClick = (evt) => {
      if(!basketModal.current.contains(evt.target)) {
        evt.stopPropagation();
        history.goBack();
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="basket" ref={basketModal}>
      <div className="basket__current-command">
        {
          Object.keys(basket).map((meal, index) => {
            console.log("meal in basket", meal)
            return (<BasketItem name={meal.name} price={meal.price} number={meal.quantity} key={index}/>)
          })
        }
        {/* <BasketItem name="Salade César" price="6.50€" number="1" />
        <BasketItem name="Burger Bacon" price="10.50€" number="2" />
        <BasketItem name="Salade de fruits" price="5€" number="2" />
        <BasketItem name="Jus Aloe-lemon" price="2.50€" number="1" /> */}
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
};

export default Basket;