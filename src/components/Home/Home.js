import {AboutUs, Who, Work, Showcase} from introData.js
import Introduction from Introduction.js

const Home = () => {
 <img src="homepage">
 <Introduction HeaderText={AboutUs.HeaderText} Description={AboutUs.Description} Hyperlink={AboutUs.Hyperlink}
 img={Aboutus.img} switchsides={Aboutus.switchsides}/>

  <Introduction HeaderText={Who.HeaderText} Description={Who.Description} Hyperlink={Who.Hyperlink}
  img={Who.img} switchsides={Who.switchsides}/>
 

}