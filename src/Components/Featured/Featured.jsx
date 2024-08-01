import React from 'react'
import './Featured.css'
import { FaArrowRight } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import google from '../../assets/google.png'
import { IoLocationOutline } from "react-icons/io5";
import prabodh from '../../assets/prabodh.png'
import logos_skype from '../../assets/logos_skype.png'
import facebook from '../../assets/facebook.png'
import apple from '../../assets/apple.png'
import twitter from '../../assets/twitter.png'
const Featured = () => {
  return (
    <div className='featured'>
    
    <div className='featured-container'>
        
        <h2 className='featured-heading'>Featured Companies</h2>
        <div className='see-more'>
      <Button variant="primary" className='see-more-btn'>See More
      <FaArrowRight className='see-more-icon' />
      </Button>
     </div>

    </div>


<div className='featured-main-content'>
        
        <div className='featured-first-row'>
        <div className='featured-first-content'>
        <div className='top-content'>
                <div className='logo-image'>
                <img src={google} width={32} height={32} alt="" />
                </div>
                <Button variant="primary" className='jobs-available-btn'>50 jobs available</Button>
            </div>

        <div className='text'>
        <h3 className='text-heading'>Google</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Perth, Australia</p>
        </div>

        </div>
        <div className='buttomn-btn'>
        <Button variant="primary" className='information-technology-btn'>Information Technology</Button> 
        <Button variant="primary" className='fintech-btn'>Fintech</Button> 
        </div>

        </div>
        <div className='featured-first-content'>
        <div className='top-content'>
        <div className='logo-image'>
                <img src={prabodh} width={32} height={32} alt="" />
                </div>
                <Button variant="primary" className='jobs-available-btn'>222 jobs available</Button>
            </div>

        <div className='text'>
        <h3 className='text-heading'>Prabodh Digital Production</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Perth, Australia</p>
        </div>

        </div>
        <div className='buttomn-btn'>
        <Button variant="primary" className='information-technology-btn'>Information Technology</Button> 
        <Button variant="primary" className='fintech-btn'>Fintech</Button> 
        </div>
        </div>

        <div className='featured-first-content'>
        <div className='top-content'>
        <div className='logo-image'>
                <img src={logos_skype} width={32} height={32} alt="" />
                </div>
                <Button variant="primary" className='jobs-available-btn'>115 jobs available</Button>
            </div>

        <div className='text'>
        <h3 className='text-heading'>Skype</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Perth, Australia</p>
        </div>

        </div>
        <div className='buttomn-btn'>
        <Button variant="primary" className='information-technology-btn'>Information Technology</Button> 
        <Button variant="primary" className='fintech-btn'>Fintech</Button> 
        </div>
        </div>

        </div>

{/* --------------------First Row Ended-------------------- */}

        

<div className='featured-first-row'>
        <div className='featured-first-content'>
        <div className='top-content'>
        <div className='logo-image'>
                <img src={facebook} width={32} height={32} alt="" />
                </div>
                <Button variant="primary" className='jobs-available-btn'>97 jobs available</Button>
            </div>

        <div className='text'>
        <h3 className='text-heading'>Google</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Perth, Australia</p>
        </div>

        </div>
        <div className='buttomn-btn'>
        <Button variant="primary" className='information-technology-btn'>Information Technology</Button> 
        <Button variant="primary" className='fintech-btn'>Fintech</Button> 
        </div>

        </div>
        <div className='featured-first-content'>
        <div className='top-content'>
        <div className='logo-image'>
                <img src={apple} width={32} height={32} alt="" />
                </div>
                <Button variant="primary" className='jobs-available-btn'>130 jobs available</Button>
            </div>

        <div className='text'>
        <h3 className='text-heading'>Prabodh Digital Production</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Perth, Australia</p>
        </div>

        </div>
        <div className='buttomn-btn'>
        <Button variant="primary" className='information-technology-btn'>Information Technology</Button> 
        <Button variant="primary" className='fintech-btn'>Fintech</Button> 
        </div>
        </div>

        <div className='featured-first-content'>
        <div className='top-content'>
        <div className='logo-image'>
                <img src={twitter} width={32} height={32} alt="" />
                </div>
                <Button variant="primary" className='jobs-available-btn'>80 jobs available</Button>
            </div>

        <div className='text'>
        <h3 className='text-heading'>Skype</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Perth, Australia</p>
        </div>

        </div>
        <div className='buttomn-btn'>
        <Button variant="primary" className='information-technology-btn'>Information Technology</Button> 
        <Button variant="primary" className='fintech-btn'>Fintech</Button> 
        </div>
        </div>

        </div>

    </div>

    </div>
  )
}

export default Featured
