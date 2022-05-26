import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}

export default Home