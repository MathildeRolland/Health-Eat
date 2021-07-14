import React from 'react';
import PropTypes from 'prop-types';

import './burger.scss';

const Burger = ({ handleClick }) => (
    <div className="burger" onClick={handleClick}>
        <div className="burger__line" />
        <div className="burger__line" />
        <div className="burger__line" />
    </div>
);

Burger.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default Burger;