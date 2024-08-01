import React from 'react'
import './JoinUs.css'
import Button from 'react-bootstrap/Button';
import whyjoinus from '../../assets/whyjoinus.png'
const JoinUs = () => {
  return (
    <div className='join-us'>
      
      <div className='join-us-container'>
        
        <div className='join-wrapper'>
        

          <div className='join-left'>
            <h2>Join <span>Pacific Hunt</span> today. Connect, Grow, Succeed.</h2>
            <p>Whether you're seeking your next career move or searching for top talent, <br /> our platform offers the perfect avenue to connect and thrive.</p>
            <div className='button-wrapper'>
            <Button variant="primary" className='job-seeker-btn'>Join As Jobseeker</Button>
            <Button variant="primary" className='employer-btn'>Join As Employer</Button>
            </div>
          </div>
          <img src={whyjoinus} height={455} alt="" />

          

        </div>

      </div>

    </div>
  )
}

export default JoinUs
