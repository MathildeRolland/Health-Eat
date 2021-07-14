import React from 'react';

import ListItem from './ListItem';

const Nav = () => (
    <div className="nav">
        <ul className="nav__list">
            <ListItem text="S'INSCRIRE"/>
            <ListItem text="SE CONNECTER"/>
            <ListItem text="NOUS CONTACTER"/>
        </ul>
    </div>
);

export default Nav;