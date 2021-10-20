import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faEnvelope
} 
from "@fortawesome/free-brands-svg-icons";

// const footStyle = {
//   backgroundColor: 'white',
//   color: '#202020',
//   padding: '20px 10vw',
//   textAlign: 'center',
//   marginTop: '5vw',
//   zIndex: '1',
// }

// const footItemStyle = {
//   display: 'flex',
//   // alignItems: 'center',
//   // flexGrow: '1',
//   flexDirection: 'row',
//   fontSize: '2.5rem',
//   justifyContent: 'center',
//   zIndex: '1',
// }

// const col5ths {
//   padding: '0 10px',
// }

// export default function SocialFollow() {
//   return (
//     <div class="footStyle">
//       {/* <h3>Social Follow</h3> */}
//       <a href="https://www.youtube.com/c/jamesqquick"
//         className="envelope social">
//         <FontAwesomeIcon icon={faEnvelope} size="2x" />
//       </a>
//       <a href="https://www.youtube.com/c/jamesqquick"
//         className="youtube social">
//         <FontAwesomeIcon icon={faYoutube} size="2x" />
//       </a>
//       <a href="https://www.facebook.com/learnbuildteach/"
//         className="facebook social">
//         <FontAwesomeIcon icon={faFacebook} size="2x" />
//       </a>
//       <a href="https://www.twitter.com/jamesqquick" className="twitter social">
//         <FontAwesomeIcon icon={faTwitter} size="2x" />
//       </a>
//       <a href="https://www.instagram.com/learnbuildteach"
//         className="instagram social">
//         <FontAwesomeIcon icon={faInstagram} size="2x" />
//       </a>
//     </div>
//   );
// }

const Footer = () => {
  const footItems = [
    { name: 'Email', icon: faEnvelope, path: "https://www.youtube.com/c/jamesqquick" },
    { name: 'LinedIn', icon: faFacebook, path: "https://www.youtube.com/c/jamesqquick" },
    { name: 'Facebook', icon: faYoutube, path: "https://www.youtube.com/c/jamesqquick" },
    { name: 'Instagram', icon: faTwitter, path: "https://www.youtube.com/c/jamesqquick" },
    { name: 'Medium', icon: faInstagram, path: "https://www.youtube.com/c/jamesqquick" }]

  const footStyle = {
      backgroundColor: 'white',
      color: '#202020',
      padding: '20px 10vw',
      textAlign: 'center',
      marginTop: '5vw',
      zIndex: '1',
    }
        
  const footItemStyle = {
    display: 'flex',
    // alignItems: 'center',
    // flexGrow: '1',
    flexDirection: 'row',
    fontSize: '2.5rem',
    justifyContent: 'center',
    zIndex: '1',
  }
  
  const col5ths = {
    padding: '0 10px',
  }

  const hoverColor = {
    color: '#E06B65',
  }

  return (
      <div style={footStyle}>
          {footItems.map((item) => (
              <div style={{footItemStyle, col5ths, hoverColor}} key={item.name}
              onMouseOver={({target})=>target.style.hoverColor='white'} 
              // onMouseOut={(target)=>target.hoverColor='#00F'}
              >
                  <Link href={item.path}>
                      {item.icon}
                  </Link>
              </div>
          ))}</div>
  )
}

export default Footer

// const Footer = () => {
//   const navItems = [
//       { name: 'Email', path: '/' },
//       { name: 'LinedIn', path: '/apply' },
//       { name: 'Facebook', path: '/our-story' },
//       { name: 'Instagram', path: '/partner' },
//       { name: 'Medium', path: '/projects' }]

  
//   return (
//       <div style={navStyle}>
//           {navItems.map((item) => (
//               <div style={navItemStyle} key={item.name}>
//                   <Link href={item.path}>
//                       {item.name}
//                   </Link>
//               </div>
//           ))}</div>
//   )
// }

// export default Footer


// .social-icons {
//     font-size: 1.75rem;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     width: 50vw;
//     -webkit-box-pack: justify;
//         -ms-flex-pack: justify;
//             justify-content: space-between;
//   }
  
//   .social-icons > a:nth-child(1):hover {
//     color: #E06B65;
//   }
  
//   .social-icons > a:nth-child(2):hover {
//     color: #FEEB96;
//   }
  
//   .social-icons > a:nth-child(3):hover {
//     color: #99CC99;
//   }
  
//   .social-icons > a:nth-child(4):hover {
//     color: #99CCFF;
//   }
  
//   footer {
    
//   }

//   <!-- Footer -->
//   <footer id="footer">
//   <div class="footer-icons">
//       <div class="row">
//           <a class="col-5ths footer-icon-1" href="mailto:inventioncorps@icb.berkeley.edu" target="_blank"><i class="fas fa-envelope"></i></a>
//           <a class="col-5ths footer-icon-2" href="https://www.linkedin.com/company/berkeley-invention-corps/" target="_blank"><i class="fab fa-linkedin"></i></a>
//           <a class="col-5ths footer-icon-3" href="https://www.facebook.com/InventionCorps" target="_blank"><i class="fab fa-facebook-square"></i></a>
//           <a class="col-5ths footer-icon-4" href="https://www.instagram.com/inventioncorps/" target="_blank"><i class="fab fa-instagram"></i></a>
//           <a class="col-5ths footer-icon-5" href="https://medium.com/invention-corps" target="_blank"><i class="fab fa-medium"></i></a>
//       </div>
//   </div>
//   Made with ♥ by the
//   <span> <a class="underline" href="webteam.html">Invention Corps Web Team</a> </span>
// </footer>