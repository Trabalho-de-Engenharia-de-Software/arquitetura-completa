import './BannerBarberPage.css'
import ServiceBarber from './ServiceBarber/ServiceBarber'

export default function BannerBarberPage() {
  return (
    <div className='Banner_container_user'>
    <div className='agendamentos_container_banner'>

      <h1>Seus Atendimentos:</h1>
        <ServiceBarber/>
    </div>
  </div>
  )
}
