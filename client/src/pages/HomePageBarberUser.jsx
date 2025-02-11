import AddServices from '../components/BarberPage/AddServices/AddServices'
import AgendamentosBarber from '../components/BarberPage/Agendamentos/AgendamentosBarber'
import BannerBarberPage from '../components/BarberPage/BannerBarberPage/BannerBarberPage'
import FooterUsers from '../components/FooterGeral/FooterUsers'
import HeaderHomePageUser from '../components/HomePageUser/HeaderHomePageUser/HeaderHomePageUser'
import ReactVLibras from 'react-vlibras-plugin';

export default function HomePageBarberUser() {
  return (
    <div>
        <HeaderHomePageUser/>
        <BannerBarberPage/>
        <AddServices/>
        <AgendamentosBarber/>
        <FooterUsers/>
        <ReactVLibras/>
    </div>
  )
}
