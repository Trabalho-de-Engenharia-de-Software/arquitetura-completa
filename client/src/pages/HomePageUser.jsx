import React from 'react'
import HeaderHomePageUser from '../components/HomePageUser/HeaderHomePageUser/HeaderHomePageUser'
import BannerHomePageUser from '../components/HomePageUser/BannerHomePageUser/BannerHomePageUser'
import Footer from '../components/IndexPage/Footer/Footer'
import AtendimentosHomePage from '../components/HomePageUser/AtendimentosHomePage/AtendimentosHomePage'
import ServicesHomePage from '../components/HomePageUser/ServicesHomePage/ServicesHomePage'

export default function HomePageUser() {
  return (
    <div>
      <HeaderHomePageUser/>
      <BannerHomePageUser/>
      <AtendimentosHomePage/>
      <ServicesHomePage/>
      <Footer/>
    </div>
  )
}
