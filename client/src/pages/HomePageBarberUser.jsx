import AddServices from '../components/BarberPage/AddServices/AddServices'
import BannerBarberPage from '../components/BarberPage/BannerBarberPage/BannerBarberPage'
import HeaderHomePageUser from '../components/HomePageUser/HeaderHomePageUser/HeaderHomePageUser'

export default function HomePageBarberUser() {
  return (
    <div>
        <HeaderHomePageUser/>
        <BannerBarberPage/>
        <AddServices/>
    </div>
  )
}
