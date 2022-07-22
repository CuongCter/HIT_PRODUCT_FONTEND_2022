import Banner from '../components/banner/Banner'
import React from 'react'
import Header from '../components/header/Header'
import CardSale from '../components/cardSale/CardSale'
import ListHotel from '../components/listHotel/ListHotel'
const Service = () => {
    return (
        <div>
            <Header />
            <Banner />
            <CardSale />
            <ListHotel/>
        </div>
    )
}

export default Service