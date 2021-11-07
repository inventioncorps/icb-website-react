import React, { Component } from 'react';
import styles from './footer.css';
import Icon from './Icon';

// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faFacebook,
    faInstagram,
    faMedium 
} 
from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    
    onMouseOver = (event, iconColor) => {
        const el = event.target;
        el.style.color = iconColor;
        // event.target.style.color = iconColor
    };
      
    onMouseOut = (event) => {
        const el = event.target;
        let black = "#202020";
        // let black = "#FFFFFF";
        el.style.color = black;
    };
    
      
    render () {
        const icons = [
            {
                icon: faEnvelope,
                name: "Email" ,
                url: "mailto:inventioncorps@icb.berkeley.edu",
                color: "#E06B65"
            },
            {
                icon: faLinkedin,
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/berkeley-invention-corps/",
                color: "#FEEB96"
            },
            {
                icon: faFacebook,
                name: "Facebook",
                url: "https://www.facebook.com/InventionCorps",
                color: "#99CC99"
            },
            {
                icon: faInstagram,
                name: "Instragram",
                url: "https://www.instagram.com/inventioncorps/",
                color: "#99CCFF"
            },
            {
                icon: faMedium,
                name: "Medium",
                url: "https://medium.com/invention-corps",
                color: "#E06B65"
            }
        ];

        return (
            <div className={styles.container}>
                <ul>
                    {icons.map( (icon) =>
                        <Icon 
                        name={icon.name}
                        // id={index}
                        icon={icon.icon}
                        color={icon.color}
                        url = {icon.url} 
                        openLink={this.openInNewTab}
                        hoverIn={this.onMouseOver}   
                        hoverOut={this.onMouseOut}         
                        />
                    )}
                </ul>
                <p>Made with &hearts; by the<span> <a class="underline" href="webteam.html">Invention Corps Web Team</a> </span></p>
            </div>
        )

    }
}

export default Footer;