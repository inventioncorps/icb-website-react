import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({name, icon, color, url, openLink, hoverIn, hoverOut}) => {
    return (
        <li key = {name}>
            <button
            onClick={() => openLink(url)}
            onMouseOver={event => hoverIn(event, color)}
            onMouseOut={event => hoverOut(event)}
            >
                <span role="img" id={name}><FontAwesomeIcon icon={icon} /></span>
            </button>
         </li>

    );
}

export default Icon;
