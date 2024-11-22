import React from 'react'
import HeaderHomePageUser from '../components/HomePageUser/HeaderHomePageUser/HeaderHomePageUser'
import BannerHomePageUser from '../components/HomePageUser/BannerHomePageUser/BannerHomePageUser'
import Footer from '../components/IndexPage/Footer/Footer'
import AtendimentosHomePage from '../components/HomePageUser/AtendimentosHomePage/AtendimentosHomePage'

export default function HomePageUser() {
  return (
    <div>
      <HeaderHomePageUser/>
      <BannerHomePageUser/>
      <AtendimentosHomePage/>
      <Footer/>
    </div>
  )
}
