import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import CardSale from '../components/cardSale/CardSale'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardHotel from '../components/cardHotel/CardHotel'





const Home = () => {
    return (
        <div>
            <Header />
            <CardSale />
            <CardHotel />
            <Footer />
        </div>
    )
}

export default Home