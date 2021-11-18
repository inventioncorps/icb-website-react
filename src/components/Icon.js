import React from 'react';
import styles from "../../styles/footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({name, icon, color, url, openLink, hoverIn, hoverOut}) => {
    return (
        <div key={name} className={styles.listElement}>
            <button
            className={styles.footerButton}
            onClick={() => openLink(url)}
            onMouseOver={event => hoverIn(event, color)}
            onMouseOut={event => hoverOut(event)}
            >
                {/* <span role="img" id={name}> */}
                    <FontAwesomeIcon icon={icon} />
                {/* </span> */}
            </button>
         </div>
    );
}

export default Icon;
