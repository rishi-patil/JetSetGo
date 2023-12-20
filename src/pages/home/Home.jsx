import React from 'react'

import "./home.css"
import "../../components/navbar/Navbar"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/slider'  
import Offer from '../../components/offers/Offer'
import Featured from '../../components/featured/Featured'
import Sliderv from '../../components/propertyList/ListSlider'
import MailList from '../../components/mail/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      {<Navbar />}
      {<Header />}
      {<Slider />}
      {<Offer />}
      <div className="homeContainer">
        {<Featured />}
        <h4 className="homeTitle">Browse by property type</h4> 
        {<Sliderv/>}
        {<MailList/>}
        {<Footer />}
      </div> 
    </div>
  )
}

export default Home;