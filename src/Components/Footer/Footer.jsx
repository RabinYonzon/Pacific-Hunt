import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/logofooter.png'
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='footer-container'>

      <div className='footer-nav'>
          <div className='footer-left'>
            <img src={footerlogo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur. <br /> Nibh leo amet sed orci ipsum lectus <br /> pretium diam. Placerat ipsum volutpat <br /> commodo sodales.</p>
          </div>
          <div className='footer-middle-1'>
            <h3>Job Seekers</h3>
            <ul className='middle-content'>
              <li><a href="">Search Jobs</a></li>
              <li><a href="">Explore Jobs</a></li>
              <li><a href="">Saved Jobs</a></li>
              <li><a href="">Applied Jobs</a></li>
            </ul>
          </div>
          <div className='footer-middle-2'>
          <h3>Employers</h3>
          <ul className='middle-content'>
              <li><a href="">Register</a></li>
              <li><a href="">Post Jobs</a></li>
              <li><a href="">Applictions</a></li>
              <li><a href="">My Job Postings</a></li>
            </ul>
          </div>
          <div className='footer-right'>
          <h3>Legal</h3>
          <ul className='middle-content'>
              <li><a href="">Cookies Policy</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms Of Service</a></li>
            </ul>
          </div>

          
          
        </div>

        <hr className='footer-hr' />


        <div className='copyright'>
        <p className='copyright-text'>Copyright © 2024 Pacific Hunt. All rights reserved.</p>

        <div className='social-icons'>
        <SiFacebook className='footer-icons' />
        <FaTwitter className='footer-icons' />
        <FaYoutube className='footer-icons' />
        <FaLinkedin className='footer-icons' />
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
