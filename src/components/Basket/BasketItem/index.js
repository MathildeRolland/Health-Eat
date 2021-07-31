import React from 'react';

const BasketItem = ({ name, price, number}) => (
    <div className="basket__item">
        <input type="number" value={number} name="quantity" className="card__input--number"/>
        <p className="basket__name">{name}</p>
        <p className="basket__price">{price}</p>
    </div>
);

export default BasketItem;