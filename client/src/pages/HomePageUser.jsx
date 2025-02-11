import React from 'react'
import HeaderHomePageUser from '../components/HomePageUser/HeaderHomePageUser/HeaderHomePageUser'
import BannerHomePageUser from '../components/HomePageUser/BannerHomePageUser/BannerHomePageUser'
import AtendimentosHomePage from '../components/HomePageUser/AtendimentosHomePage/AtendimentosHomePage'
import ServicesHomePage from '../components/HomePageUser/ServicesHomePage/ServicesHomePage'
import FooterUsers from '../components/FooterGeral/FooterUsers'
import ReactVLibras from 'react-vlibras-plugin';

export default function HomePageUser() {
  return (
    <div>
      <HeaderHomePageUser/>
      <BannerHomePageUser/>
      <AtendimentosHomePage/>
      <ServicesHomePage/>
      <FooterUsers/>
      <ReactVLibras/>
    </div>
  )
}
