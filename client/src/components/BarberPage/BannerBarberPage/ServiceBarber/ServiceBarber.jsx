import LastServiceBarber from './LastServicesBarber/LastServiceBarber';
import './ServiceBarber.css'
import { useState, useEffect } from 'react'

export default function ServiceBarber() {
    const url = "http://localhost:3000/atendimentos"
    const [atendimentos, setAtendimentos] = useState([])

    //Primeira parte da API, usando o fetch diretamente no código
  useEffect(() => {
    const fetchAgendamentos = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setAtendimentos(data);
    };

    fetchAgendamentos();

    console.log(atendimentos);
  }, [url]);
  //Fim da API com o JSON Server

    return (
      <div className='container_agendamento_barber'>
          {atendimentos.length >  0 ? (<LastServiceBarber/>) : (
              <div className='agendamento_container'>
              <h2>Sem Atendimentos</h2>
             
              </div>
          )}
      </div>
    )
}
