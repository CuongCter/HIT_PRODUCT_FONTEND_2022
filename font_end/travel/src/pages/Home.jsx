import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import CardSale from '../components/cardSale/CardSale'
import MeetUs from '../MeetUs/MeetUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InfoLocation from '../components/infoLocation/InfoLocation'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardInfo from '../components/cardInfo/CardInfo'
import CommentCard from '../components/comment/CommentCard'
import CardHotel from '../components/cardHotel/CardHotel'

import ListHotel from '../components/listHotel/ListHotel'

import Blogs from '../components/blogs/Blogs'





const Home = () => {
    return (
        <div>
            <Header />
            <CardSale />
            <CardHotel />
            <InfoLocation />
            <ListHotel />
            <CommentCard />
            {/* <CardInfo /> */}
            <MeetUs />
            <Blogs />
            <Footer />
            
        </div>
    )
}

export default Home