import React from 'react';
import {SubHeading} from '../../components';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title =" Our NewsLetter"/>
      <h1 className='headtext__cormorant'>Subscribe to our NewsLetter</h1>
      <p className='p__opensans'>Never A boring Moment with us</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter Your Email Address'/>
      <button className='custom__button'>Subcribe</button>
    </div>
  </div>
);

export default Newsletter;
