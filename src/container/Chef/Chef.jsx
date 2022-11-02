import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.findus} alt=' chef'/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Words"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quotes'>
          <img src={images.quote} alt='quotes'/>
          <p className='p__opensans' my>To get going is to get started, yes you can</p>
        </div>
        <p className='p__opensans'>if you want to move fast go alone but if you want to go far walk in group </p>
      </div>
      <div className='app__chef-sign'>
        <p>Sola Ologunmeta</p>
        <p className='p__opensans'>
          Chief Executive Officer
        </p>
      </div>
    </div>
  </div>
);

export default Chef;
