import React from 'react'
import './Jobs.css'
import { FaArrowRight } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Tesla from '../../assets/Tesla.png'
import { IoLocationOutline } from "react-icons/io5";
import Batman from '../../assets/Batman.png'
import Google from '../../assets/google.png'
const Jobs = () => {
  return (
    <div className='jobs'>
       <div className='jobs-container'>
        <h2 className='jobs-heading'>Top Jobs Openings</h2>
    

       <div className='see-more'>
      <Button variant="primary" className='see-more-btn'>See More
      <FaArrowRight className='see-more-icon' />
      </Button>
     </div>

    </div>

    <div className='jobs-main-content'>

    <div className='jobs-first-row'>
        <div className='jobs-first-content'>
            <div className='top-content'>
                <img src={Tesla} alt="" />
                <Button variant="primary" className='apply-now-btn'>Apply Now</Button>
            </div>

            <div className='text'>
              <div className='first-text'>
                  <h3 className='text-heading'>Deep learning Engineer</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Sydney, Australia</p>
                  <svg className='expiry-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Clock_2"><g><path d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"></path><path d="M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z"></path></g></g></svg>
                  <p className='expiry-info'>Expires In 25 Days</p>
                  </div>

                  <div className='job-type'>
                    <p className='type-text'>Remote</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Entry Level</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Full Time</p>
                  </div>

                  <p className='income-text'>50K - 80K AUD(Yearly)</p>

                  <hr className='hr-line' />

                  <div className='company-info'>
                    <h3 className='company-name'>Tesla Inc.</h3>
                    <svg className='company-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16.3939 23.0809L16 22.912L15.6061 23.0809L7.66666 26.4835L7.66666 6.66667C7.66666 6.20091 7.82096 5.82658 8.15776 5.48977C8.49332 5.15422 8.86706 5 9.33332 5H22.6667C23.1327 5 23.507 5.15409 23.8436 5.48977C24.1792 5.82629 24.3333 6.20064 24.3333 6.66667V26.4835L16.3939 23.0809Z" stroke="#AFB0B1" stroke-width="2"></path></svg>
                  </div>

                   </div>
                   </div>
                   </div>
{/* ---------------------------------------------First Content Ended------------------------------------------------------------------- */}

       
        <div className='jobs-second-content'>
            <div className='top-content'>
                <img src={Batman} alt="" />
                <Button variant="primary" className='apply-now-btn'>Apply Now</Button>
            </div>
            <div className='text'>
              <div className='first-text'>
                  <h3 className='text-heading'>Game Developer</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Melbourn, Australia</p>
                  <svg className='expiry-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Clock_2"><g><path d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"></path><path d="M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z"></path></g></g></svg>
                  <p className='expiry-info'>Expires In 25 Days</p>
                  </div>

                  <div className='job-type'>
                    <p className='type-text'>Onsite</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Intermediate</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Internship</p>
                  </div>

                  <p className='income-text'>50K - 90K AUD(Yearly)</p>

                  <hr className='hr-line' />

                  <div className='company-info'>
                    <h3 className='company-name'>The Batman Corporation</h3>
                    <svg className='company-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16.3939 23.0809L16 22.912L15.6061 23.0809L7.66666 26.4835L7.66666 6.66667C7.66666 6.20091 7.82096 5.82658 8.15776 5.48977C8.49332 5.15422 8.86706 5 9.33332 5H22.6667C23.1327 5 23.507 5.15409 23.8436 5.48977C24.1792 5.82629 24.3333 6.20064 24.3333 6.66667V26.4835L16.3939 23.0809Z" stroke="#AFB0B1" stroke-width="2"></path></svg>
                  </div>

                   </div>
                   </div>
{/* ---------------------------------------------second Content Ended------------------------------------------------------------------- */}         
          </div>

          <div className='jobs-third-content'>
            <div className='top-content'>
                <img src={Google} width={48} height={48} alt="" />
                <Button variant="primary" className='apply-now-btn'>Apply Now</Button>
            </div>
            <div className='text'>
              <div className='first-text'>
                  <h3 className='text-heading'>AI Engineer</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Perth, Australia</p>
                  <svg className='expiry-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Clock_2"><g><path d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"></path><path d="M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z"></path></g></g></svg>
                  <p className='expiry-info'>Expires In 25 Days</p>
                  </div>

                  <div className='job-type'>
                    <p className='type-text'>Hybrid</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Experienced</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Full Time</p>
                  </div>

                  <p className='income-text'>20K - 50K AUD(Yearly)</p>

                  <hr className='hr-line' />

                  <div className='company-info'>
                    <h3 className='company-name'>Google</h3>
                    <svg className='company-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8.06058 27.4026C7.40071 27.6854 6.66666 27.2014 6.66666 26.4835V6.66667C6.66666 5.93333 6.92799 5.30533 7.45066 4.78267C7.97243 4.26089 8.59999 4 9.33332 4H22.6667C23.4 4 24.028 4.26089 24.5507 4.78267C25.0724 5.30533 25.3333 5.93333 25.3333 6.66667V26.4835C25.3333 27.2014 24.5993 27.6854 23.9394 27.4026L16 24L8.06058 27.4026Z" fill="#0072AA"></path><path d="M8.06058 27.4026C7.40071 27.6854 6.66666 27.2014 6.66666 26.4835V6.66667C6.66666 5.93333 6.92799 5.30533 7.45066 4.78267C7.97243 4.26089 8.59999 4 9.33332 4H22.6667C23.4 4 24.028 4.26089 24.5507 4.78267C25.0724 5.30533 25.3333 5.93333 25.3333 6.66667V26.4835C25.3333 27.2014 24.5993 27.6854 23.9394 27.4026L16 24L8.06058 27.4026Z" stroke="#0072AA"></path></svg>
                  </div>

                   </div>
                   </div>
          
          </div>
          
{/* ---------------------------------------------third Content Ended------------------------------------------------------------------- */}

    </div>
    <div className='jobs-second-row'>

    <div className='jobs-first-content'>
            <div className='top-content'>
                <img src={Batman} alt="" />
                <Button variant="primary" className='apply-now-btn'>Apply Now</Button>
            </div>

            <div className='text'>
              <div className='first-text'>
                  <h3 className='text-heading'>Software Engineer</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Melbourn, Australia</p>
                  <svg className='expiry-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Clock_2"><g><path d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"></path><path d="M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z"></path></g></g></svg>
                  <p className='expiry-info'>Expires In 25 Days</p>
                  </div>

                  <div className='job-type'>
                    <p className='type-text'>Onsite</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Intermediate</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Internship</p>
                  </div>

                  <p className='income-text'>50K - 90K AUD(Yearly)</p>

                  <hr className='hr-line' />

                  <div className='company-info'>
                    <h3 className='company-name'>The Batman Corporation</h3>
                    <svg className='company-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8.06058 27.4026C7.40071 27.6854 6.66666 27.2014 6.66666 26.4835V6.66667C6.66666 5.93333 6.92799 5.30533 7.45066 4.78267C7.97243 4.26089 8.59999 4 9.33332 4H22.6667C23.4 4 24.028 4.26089 24.5507 4.78267C25.0724 5.30533 25.3333 5.93333 25.3333 6.66667V26.4835C25.3333 27.2014 24.5993 27.6854 23.9394 27.4026L16 24L8.06058 27.4026Z" fill="#0072AA"></path><path d="M8.06058 27.4026C7.40071 27.6854 6.66666 27.2014 6.66666 26.4835V6.66667C6.66666 5.93333 6.92799 5.30533 7.45066 4.78267C7.97243 4.26089 8.59999 4 9.33332 4H22.6667C23.4 4 24.028 4.26089 24.5507 4.78267C25.0724 5.30533 25.3333 5.93333 25.3333 6.66667V26.4835C25.3333 27.2014 24.5993 27.6854 23.9394 27.4026L16 24L8.06058 27.4026Z" stroke="#0072AA"></path></svg>
                  </div>

                   </div>
                   </div>
                   </div>
{/* ---------------------------------------------first Content Ended------------------------------------------------------------------- */}

<div className='jobs-second-content'>
            <div className='top-content'>
                <img src={Google} width={48} height={48} alt="" />
                <Button variant="primary" className='apply-now-btn'>Apply Now</Button>
            </div>

            <div className='text'>
              <div className='first-text'>
                  <h3 className='text-heading'>Data Scientist</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Perth, Australia</p>
                  <svg className='expiry-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Clock_2"><g><path d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"></path><path d="M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z"></path></g></g></svg>
                  <p className='expiry-info'>Expires In 25 Days</p>
                  </div>

                  <div className='job-type'>
                    <p className='type-text'>Hybrid</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Experienced</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Full Time</p>
                  </div>

                  <p className='income-text'>20K - 50K AUD(Yearly)</p>

                  <hr className='hr-line' />

                  <div className='company-info'>
                    <h3 className='company-name'>Google</h3>
                    <svg className='company-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16.3939 23.0809L16 22.912L15.6061 23.0809L7.66666 26.4835L7.66666 6.66667C7.66666 6.20091 7.82096 5.82658 8.15776 5.48977C8.49332 5.15422 8.86706 5 9.33332 5H22.6667C23.1327 5 23.507 5.15409 23.8436 5.48977C24.1792 5.82629 24.3333 6.20064 24.3333 6.66667V26.4835L16.3939 23.0809Z" stroke="#AFB0B1" stroke-width="2"></path></svg>
                  </div>

                   </div>
                   </div>
                   </div>
{/* ---------------------------------------------second Content Ended------------------------------------------------------------------- */}

<div className='jobs-third-content'>
            <div className='top-content'>
                <img src={Tesla} alt="" />
                <Button variant="primary" className='apply-now-btn'>Apply Now</Button>
            </div>

            <div className='text'>
              <div className='first-text'>
                  <h3 className='text-heading'>Deep learning Engineer</h3>
                  <div className='address-text'>
                  <IoLocationOutline className='address-icon'/>
                  <p className='address-info'>Sydney, Australia</p>
                  <svg className='expiry-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Clock_2"><g><path d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"></path><path d="M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z"></path></g></g></svg>
                  <p className='expiry-info'>Expires In 25 Days</p>
                  </div>

                  <div className='job-type'>
                    <p className='type-text'>Remote</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Entry Level</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="3" fill="#86888A"></circle></svg>
                    <p className='type-text'>Full Time</p>
                  </div>

                  <p className='income-text'>50K - 80K AUD(Yearly)</p>

                  <hr className='hr-line' />

                  <div className='company-info'>
                    <h3 className='company-name'>Tesla Inc.</h3>
                    <svg className='company-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16.3939 23.0809L16 22.912L15.6061 23.0809L7.66666 26.4835L7.66666 6.66667C7.66666 6.20091 7.82096 5.82658 8.15776 5.48977C8.49332 5.15422 8.86706 5 9.33332 5H22.6667C23.1327 5 23.507 5.15409 23.8436 5.48977C24.1792 5.82629 24.3333 6.20064 24.3333 6.66667V26.4835L16.3939 23.0809Z" stroke="#AFB0B1" stroke-width="2"></path></svg>
                  </div>

                   </div>
                   </div>
                   </div>
{/* ---------------------------------------------third Content Ended------------------------------------------------------------------- */}


</div>
</div>

</div>
  )
}

export default Jobs
