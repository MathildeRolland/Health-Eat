import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

// == COMPONENTS
import BasketItem from './BasketItem';
import Button from 'src/components/Button';

// == STYLES
import './basket.scss';

// == FUNCTIONS
import { calcTotalPriceHT } from '../../functions';

// Render
const Basket = ({ basket }) => {
  const history = useHistory();
  console.log("totalPrice", calcTotalPriceHT(basket))

  // State
  let [ totalTTC, setTotalTTC ] = useState(calcTotalPriceHT(basket));
  const [ deliverPrice, setDeliverPrice ] = useState(4);

  // Refs
  const basketModal = useRef(null);

  // Close modal
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
          basket.map((meal) => <BasketItem name={meal.name} price={meal.price} number={meal.quantity} key={meal.id} />)
        }
      </div>
      <div className="basket__validation">
        <div className="basket__properties">
          <p className="basket__property">Total</p>
          <p className="basket__property">Livraison</p>
          <p className="basket__property">Total avec livraison</p>
          <p className="basket__property basket__checkbox">Demander des couverts, pailles...</p>
        </div>
        <div className="basket__prices">
          <p className="basket__price">{totalTTC.toFixed(2)}€</p>
          <p className='basket__price'>{deliverPrice}€</p>
          <p className="basket__price total">{(totalTTC += deliverPrice).toFixed(2)}€</p>
          <input type="checkbox" className="basket__checkbox" />
        </div>
      </div>
      <Button text="Commander" className="button button--colored"/>
    </div>
  );
};

export default Basket;