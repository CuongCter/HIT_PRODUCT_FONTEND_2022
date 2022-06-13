import Header from '../components/header/Header'
import Location from '../components/location/Location'
import TopPosts from '../components/topPosts/TopPosts'
import RecentPosts from '../components/recentPosts/RecentPosts'
import Footer from '../components/footer/Footer'
import React from 'react'

const Locations = () => {
  return (
    <div>
      <Header />
      <Location />
      <TopPosts />
      <RecentPosts />
      <Footer/>
        
    </div>
  )
}

export default Locations
