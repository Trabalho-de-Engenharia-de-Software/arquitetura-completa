import './ServicesHomePage.css'
import {fetchServicos} from '../../../APIs/fetchServicos'
import { useState, useEffect } from 'react'


export default function ServicesHomePage() {

  const [services, setServices] = useState([])
  
  useEffect(() => {
    const getServicos = async () => {
      const data = await fetchServicos()
      setServices(data)
    }
    getServicos()
    console.log(services)
  }, [])



  return (
    <div className="Services_Container">
      <div className='Title_service_container'>
       <h2>Nossos Serviços:</h2>
       <div className="golden_line"><img src="/img/GoldLine.png" alt="" /></div>
      </div>
        <div className='container_services_homeUser'>
          <div className='Services_container_name1'>
            <div className='h1_container'>
            <h1>Serviços:</h1>
            </div>
            {services.map((services) => (
              <div 
               key={services.id}
               className='service_name'
              ><p>{services.nome}</p></div>
            ))}
          </div>
          <div className='Services_container_name2'>
          <div className='h1_container'>
            <h1>Valor:</h1>
          </div>
            {services.map((services) => (
              <div 
               key={services.id}
               className='service_name'
              ><p>R$ {services.preco}</p></div>
            ))}
          </div>
        </div>
    </div>
  )
}
