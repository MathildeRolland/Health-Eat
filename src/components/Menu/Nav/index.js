import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import ListItem from './ListItem';

import './nav.scss';

const Nav = ({ burgerIsClicked }) => {
    const location = useLocation();

    return (
        <div className={burgerIsClicked ? "nav nav--open" : "nav"}>
            <ul className="nav__list">
                <ListItem path="/" text="ACCUEIL" className="nav__list-item" exact />
                <ListItem path="/user" text="MES INFORMATIONS" className="nav__list-item" exact />
                <ListItem path="/submit" text="S'INSCRIRE" className="nav__list-item" exact />
                <ListItem 
                    path={{
                        pathname: "/login",
                        state: { background: location } // save the location where we were right before we clicked the link
                    }} 
                    text="SE CONNECTER"
                    className="nav__list-item nav__list-item--hidden"
                    />
                <ListItem path="/contact" text="NOUS CONTACTER" className="nav__list-item" exact />
            </ul>
        </div>
    );
};

Nav.propTypes = {
    burgerIsClicked: PropTypes.bool.isRequired,
};

export default Nav;