import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Button from 'react-bootstrap/Button';
const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <div className='nav-left'>
            <img src={logo}/>
        </div>

        <div className='nav-right'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Companies</a></li>
                <li><a href="">About Us</a></li>
                <li><Button variant="primary" className='sign-up-btn'>Sign Up</Button></li>
                <li><Button variant="primary" className='post-job-btn'>Post a job</Button></li>

            </ul>
            
        </div>
      </nav>
    </div>
  )
}

export default Navbar
