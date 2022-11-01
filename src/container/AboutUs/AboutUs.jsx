import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="letter-G" />
    </div>
    <div className="app__aboutus-content flex__center">
      {/* about us */}
    <div className="app__aboutus-content_about ">
      <h1 className="headtext__cormorant">About Us</h1>
      <img src={images.spoon} alt="about_spoon" className="spoon__img" />
      <p className="p__opensans">
        {" "}
        We started as a mini buka now we go worlwide isn't that amazing and cool
      </p>
      <button type= 'button' className="custom__button">Know More</button>
    </div>
    {/* end of about us */}
    {/* knife image section */}
    <div className="app__aboutus-content_knife flex__center">
      <img src={images.knife} alt='about_knife'/>
    </div>
    {/* end of knife section */}
    {/* our history section */}
    <div className="app__aboutus-content_history ">
      <h1 className="headtext__cormorant">Our History</h1>
      <img src={images.spoon} alt="about_spoon" className="spoon__img" />
      <p className="p__opensans">
        {" "}
        We started from the scratch and now we are going places to the world yes we can
      </p>
      <button type= 'button' className="custom__button">Know More</button>
    </div>
    </div>
  </div>
);

export default AboutUs;
