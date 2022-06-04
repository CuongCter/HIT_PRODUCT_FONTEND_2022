import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import CardSale from '../components/cardSale/CardSale'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CardHotel from '../components/cardHotel/CardHotel'
import MeetUs from '../components/meetUs/MeetUs'
import Blogs from '../components/blogs/Blogs'


import InfoLocation from '../components/infoLocation/InfoLocation'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardInfo from '../components/cardInfo/CardInfo'




const Home = () => {
    return (
        <div>
            <Header />
            <CardSale />
 
            {/* <InfoLocation />
            <CardInfo/> */}

            <CardHotel />
            {/* <MeetUs /> */}
            <Blogs/>

            <Footer />
        </div>
    )
}

export default Home