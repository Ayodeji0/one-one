import React from 'react';
import {SubHeading} from '../../components'
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
    <SubHeading title='Content'/>
    <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
    <div className='app__wrapper-content'>
      <p className='p_opensans'>Kwara State University bustop malatet</p>
      <p className='headtext__cormorant' style={{color:"#DDCA87", margin: '2rem 0'}}>Opening Hour</p>
      <p className='p_opensans'>Mon - Fri: 10:Am- 2Am</p>
      <p className='p_opensans'>Sat - Sun: 10:Am- 5Am</p>  
    </div>
    <button className='custom__button' style={{marginTop:'2rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find-img'/>
    </div>
  </div>
);

export default FindUs;
