import './BannerHomePageUser.css'
import Scheduling from './Scheduling/Scheduling'

export default function BannerHomePageUser() {
  return (
    <div className='Banner_container_user'>
      <div>

        <h1>Seu ultimo Agendamento:</h1>
            <Scheduling/>
      </div>
    </div>
  )
}
