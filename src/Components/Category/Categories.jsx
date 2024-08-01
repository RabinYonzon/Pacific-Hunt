import React from 'react'
import './Categories.css'
import { FaArrowRight } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { LuCode2 } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
const Categories = () => {
  return (
    <div className='categories'>
    <div className='categories-container'>
      <h2 className='categories-heading'>Popoular Categories</h2>

      <div className='see-more'>
      <Button variant="primary" className='see-more-btn'>See More
      <FaArrowRight className='see-more-icon' />
      </Button>
     </div>
     
     </div>

     <div className='main-content'>
     <div className='first-row'>
            <div className='first-content'>
            <div className='icon-box'>
            <svg className='category-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Pen"><path d="M20.235,11.284a2.3,2.3,0,0,0-3.01-.149L15.444,5.744a2.484,2.484,0,0,0-2.1-1.7l-8.581-.93A1.5,1.5,0,0,0,3.115,4.765l.93,8.579a2.479,2.479,0,0,0,1.7,2.1l5.39,1.77a2.258,2.258,0,0,0-.51,1.43,2.257,2.257,0,0,0,2.25,2.25,2.263,2.263,0,0,0,1.591-.661l5.77-5.769a2.249,2.249,0,0,0,0-3.181Zm-14.18,3.21a1.5,1.5,0,0,1-1.02-1.26l-.9-8.39,4.01,4.01a1.188,1.188,0,0,0,.281,1.221,1.167,1.167,0,1,0,1.649-1.651,1.143,1.143,0,0,0-1.209-.269l-4.02-4.02,8.39.9a1.476,1.476,0,0,1,1.259,1.02l1.931,5.86-4.51,4.51Zm11.709-2.51a1.25,1.25,0,0,1,2.13.891,1.237,1.237,0,0,1-.369.88l-5.771,5.77a1.277,1.277,0,0,1-1.769,0,1.253,1.253,0,0,1,0-1.76Z"></path></g></svg>
            </div>
            <div className='category-content'>
            <p className='category-title'>Graphics & Design</p>
            <p className='category-description'>418 Open positions</p>
            </div>
            </div>
            
            <div className='second-content'>
            <div className='icon-box'>
            <LuCode2 className='category-icon' />
            </div>
            <div className='category-content'>
            <p className='category-title'>Coding & Programming</p>
            <p className='category-description'>310 Open positions</p>
            </div>
            </div>

            <div className='third-content'>
            <div className='icon-box'>
            <FaDatabase  className='category-icon' />
            </div>
            <div className='category-content'>
            <p className='category-title'>Data Science</p>
            <p className='category-description'>276 Open positions</p>
            </div>
            </div>

          </div> 


          <div className='second-row'>
          <div className='first-content'>
            <div className='icon-box'>
            <svg className='category-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M216,52H180V44a28,28,0,0,0-28-28H104A28,28,0,0,0,76,44v8H40A20,20,0,0,0,20,72V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V72A20,20,0,0,0,216,52ZM100,44a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM212,196H44V76H212Zm-48-60a12,12,0,0,1-12,12H140v12a12,12,0,0,1-24,0V148H104a12,12,0,0,1,0-24h12V112a12,12,0,0,1,24,0v12h12A12,12,0,0,1,164,136Z"></path></svg>
            </div>
            <div className='category-content'>
            <p className='category-title'>Health Care</p>
            <p className='category-description'>150 Open positions</p>
            </div>
            </div>

            <div className='second-content'>
            <div className='icon-box'>
            <svg className='category-icon' stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"></path></svg>
            </div>
            <div className='category-content'>
            <p className='category-title'>Digital Marketing</p>
            <p className='category-description'>530 Open positions</p>
            </div>
            </div>

            <div className='third-content'>
            <div className='icon-box'>
            <svg className='category-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path></svg>
            </div>
            <div className='category-content'>
            <p className='category-title'>Accounting</p>
            <p className='category-description'>94 Open positions</p>
            </div>
            </div>

          </div>
     </div>

       


    </div>
    
  )
}

export default Categories
