import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Categories from './Components/Category/Categories'
import Jobs from './Components/Jobs/Jobs'
import Companies from './Components/Companies/Companies'
import Featured from './Components/Featured/Featured'
import AboutUs from './Components/AboutUs/AboutUs'
import JoinUs from './Components/JoinUs/JoinUs'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Categories/>
    <Jobs/>
    <Companies/>
    <Featured/>
    <AboutUs/>
    <JoinUs/>
    <Footer/>
    </>
    
  )
}

export default App
