import React from 'react'
import './Hero.css'
import { TiTickOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";
import Button from 'react-bootstrap/Button';
import homePageImage from '../../assets/homePageImage.png'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-left'>
        <div className='title-content'>
        <TiTickOutline className='tick-icon' />
        <p className='title'>Your Trusted Career Partner</p>
        </div>

        <h1 className='heading'>Unlock Your Dream<span>Career</span></h1>

        <p className='description'>Our platform is dedicated to empowering individuals, connecting <br /> talent with the right opportunities, and fostering professional <br /> growth.</p>

        <div className='search-box'>
        
        <div className='search-items-input'>
        <div className='first-input'>
       <FaSearch className='search-icon' />
       <input type="text" name='Job title' placeholder='Job title, Keyword...' className='job-title-input' />
       </div>

       <div className='second-input'>
       <VscLocation  className='location-icon'/>
       <input type="text" name='Job title' placeholder='Enter Location' className='location-input' />
       </div>

       <Button variant="primary" className='search-job-btn'>Search Job</Button>
        
        </div>
          <img src="" alt="" />
       </div>

        <div className='hero-left-text'>
          <p><span>Popular Searches:</span>Designer, Developer, Programmer, Architect.</p>
        </div>

        </div>
       
       <div className='hero-right'>
        <img src={homePageImage} />

        <div className='card'>
        <svg className='job-icon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.3537 8.66151V11.1791L8.27019 11.4238C7.21088 11.5069 6.21073 11.9335 5.42968 12.6354C4.64862 13.3374 4.13175 14.2742 3.96172 15.296C3.88709 15.7534 3.8161 16.2109 3.75421 16.6701C3.73948 16.7811 3.76133 16.8938 3.81662 16.9919C3.87191 17.0901 3.95777 17.1686 4.06183 17.2161L4.20199 17.28C14.084 21.8365 25.9173 21.8365 35.7975 17.28L35.9376 17.2161C36.0414 17.1683 36.1268 17.0897 36.1818 16.9916C36.2367 16.8935 36.2583 16.7809 36.2434 16.6701C36.1818 16.2111 36.1132 15.753 36.0378 15.296C35.8677 14.2742 35.3509 13.3374 34.5698 12.6354C33.7887 11.9335 32.7886 11.5069 31.7293 11.4238L28.6458 11.1809V8.66328C28.646 7.92014 28.3723 7.20162 27.8746 6.6384C27.3769 6.07517 26.6882 5.70466 25.9337 5.59425L23.713 5.2698C21.2513 4.91007 18.7482 4.91007 16.2865 5.2698L14.0658 5.59425C13.3116 5.70462 12.6231 6.07487 12.1255 6.63772C11.6278 7.20058 11.3539 7.91867 11.3537 8.66151ZM23.3071 7.89913C21.1145 7.5788 18.885 7.5788 16.6924 7.89913L14.4717 8.22358C14.364 8.23929 14.2656 8.29212 14.1944 8.37248C14.1233 8.45284 14.0841 8.5554 14.084 8.66151V10.993C18.0246 10.7731 21.9749 10.7731 25.9155 10.993V8.66151C25.9154 8.5554 25.8762 8.45284 25.805 8.37248C25.7339 8.29212 25.6355 8.23929 25.5278 8.22358L23.3071 7.89913Z" fill="#01A3E0"/>
              <path d="M36.5966 20.3791C36.593 20.3218 36.5751 20.2662 36.5446 20.2171C36.514 20.168 36.4717 20.1268 36.4212 20.0972C36.3707 20.0675 36.3135 20.0503 36.2547 20.0469C36.1958 20.0435 36.137 20.0541 36.0833 20.0777C25.9428 24.4517 14.0567 24.4517 3.91621 20.0777C3.86248 20.0541 3.80366 20.0435 3.7448 20.0469C3.68595 20.0503 3.62881 20.0675 3.57832 20.0972C3.52782 20.1268 3.48548 20.168 3.45492 20.2171C3.42437 20.2662 3.40652 20.3218 3.40291 20.3791C3.21688 23.7735 3.40422 27.1775 3.96172 30.533C4.13138 31.5551 4.64809 32.4923 5.42918 33.1946C6.21027 33.8969 7.21061 34.3238 8.27019 34.4069L11.6777 34.6729C17.2166 35.109 22.781 35.109 28.3218 34.6729L31.7293 34.4069C32.7889 34.3238 33.7892 33.8969 34.5703 33.1946C35.3514 32.4923 35.8681 31.5551 36.0378 30.533C36.5947 27.1732 36.7841 23.7691 36.5966 20.3809" fill="#01A3E0"/>
            </svg>
        <h2 className='card-title'>20K +</h2>
        <p className='card-description'>Job vacancy</p>
        </div>

       </div>
        
    </div>
    
  )
}

export default Hero

