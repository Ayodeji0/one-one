import React from 'react';
import {FiTwitter, FiInstagram, FiFacebook} from 'react-icons/fi'
import { FooterOverlay, Newsletter} from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    {/* for the main footer */}
    <div className='app__footer-links'>
   <div className='app__footer-links_contact'>
    <h1 className='app__footer-headtext'>Contact Us</h1>
    <p className='p__opensans'>Kwasu road, malete Ilorin</p>
    <p className='p__opensans'>+23490989000</p>
    <p className='p__opensans'>+8738393884</p>
   </div>
   <div className='app__footer-links_logo'>
  <img src={images.gericht} alt='logo'/>
  <p className='p__opensans'>The best way to find yourself is to slost yourself in the service of others</p>
    <img src={images.spoon} alt='spoon' style={{marginTop:'5rem'}}/>
    <div className='app__footer-links_icons'>
    <FiFacebook/>
    <FiTwitter/>
    <FiInstagram/>
   </div>
   </div>
  
   <div className='app__footer-links_work'>
   <h1 className='app__footer-headtext'>Working Hours</h1>
    <p className='p__opensans'>Monday- Friday</p>
    <p className='p__opensans'>8:30am- 12:00pm</p>
    <p className='p__opensans'>Saturday-Sunday</p>
    <p className='p__opensans'>7:00am- 11:00pm</p>
   </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'> @ ayodeji</p>
    </div>
  </div>
);

export default Footer;
