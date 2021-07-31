import React from 'react';

import './lastcommand.scss';

const LastCommand = () => (
    <div className="lastcommand">
        <div className="lastcommand__header">
            <time className="lastcommand__date">Le 07 Juillet 2021</time>
            <p className="lastcommand__price">25€</p>
        </div>
        <div className="lastcommand__command">
            <div className="lastcommand__item">
                <p className="lastcommand__name">Salade César</p>
                <p className="lastcommand__number">X1</p>
            </div>
            <div className="lastcommand__item">
                <p className="lastcommand__name">Burger bacon</p>
                <p className="lastcommand__number">X2</p>
            </div>
            <div className="lastcommand__item">
                <p className="lastcommand__name">Salade de fruits</p>
                <p className="lastcommand__number">X2</p>
            </div>
        </div>
    </div>
);

export default LastCommand;