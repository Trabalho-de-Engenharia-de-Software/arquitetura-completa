import LastServiceBarber from './LastServicesBarber/LastServiceBarber';
import './ServiceBarber.css'
import { useState, useEffect } from 'react'
import { fetchAgendamentos } from "../../../../APIs/fetchAgendamentos";

export default function ServiceBarber() {

  const [atendimentos, setAtendimentos] = useState([]);

  useEffect(() => {
    const getAgendamentos = async () => {
      const data = await fetchAgendamentos()
      setAtendimentos(data);
    };

    getAgendamentos();

    console.log(atendimentos);
  }, []);

    return (
      <div className='container_agendamento_barber'>
          {atendimentos.length >  0 ? (<LastServiceBarber agendamentos={atendimentos}/>) : (
              <div className='agendamento_container'>
              <h2>Sem Atendimentos</h2>
             
              </div>
          )}
      </div>
    )
}
