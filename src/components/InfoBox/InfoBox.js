import React from 'react';

// == STYLE
import './infoBox.scss';

const InfoBox = ({ className, info }) => {
    return (
        <div className={className}>
            <p className="infobox__content">{info}</p>
        </div>
    )
}

export default InfoBox;