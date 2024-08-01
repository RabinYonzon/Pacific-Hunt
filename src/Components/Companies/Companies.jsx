import React from 'react'
import './Companies.css'
import zoho from '../../assets/zoho.png'
import airbnb from '../../assets/airbnb.png'
import microsoft from '../../assets/microsoft.png'
import pickup from '../../assets/pickup.png'
import Google_2 from '../../assets/Google_2.png'
const Companies = () => {
  return (
    <div className='companies'>
      <h2 className='companies-heading'>Join in globally <span>renowned</span> companies</h2>
      
      <div className='company-logo'>
      <img src={Google_2} alt="" />
      <img src={zoho} alt="" />
      <img src={airbnb} alt="" />
      <img src={microsoft} alt="" />
      <img src={pickup} alt="" />
      </div>
    </div>
  )
}

export default Companies
