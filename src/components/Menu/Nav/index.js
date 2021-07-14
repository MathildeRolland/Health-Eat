import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

import './nav.scss';

const Nav = ({ burgerIsClicked }) => (
    <div className={burgerIsClicked ? "nav nav--open" : "nav"}>
        <ul className="nav__list">
            <ListItem path="/submit" text="S'INSCRIRE"/>
            <ListItem path="/login" text="SE CONNECTER"/>
            <ListItem path="/contact" text="NOUS CONTACTER"/>
        </ul>
    </div>
);

Nav.propTypes = {
    burgerIsClicked: PropTypes.bool.isRequired,
};

export default Nav;