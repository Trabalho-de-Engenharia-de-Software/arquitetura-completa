import LastServiceBarber from './LastServicesBarber/LastServiceBarber';
import './ServiceBarber.css';
import { useState, useEffect } from 'react';
import { fetchAgendamentos } from "../../../../APIs/fetchAgendamentos";
import { fetchServicosById } from "../../../../APIs/fetchServicos";

export default function ServiceBarber() {
  const [atendimentos, setAtendimentos] = useState([]);
  const [servicos, setServicos] = useState({});

  useEffect(() => {
    const getAgendamentos = async () => {
      const data = await fetchAgendamentos();
      const agendamentosDoDia = data.filter(isToday);
      setAtendimentos(agendamentosDoDia);

      // Buscar os nomes dos serviços
      const servicosData = {};
      for (const agendamento of agendamentosDoDia) {
        if (!servicosData[agendamento.id_servico]) {
          const servico = await fetchServicosById(agendamento.id_servico);
          servicosData[agendamento.id_servico] = servico.nome;
        }
      }
      setServicos(servicosData);
    };

    getAgendamentos();
  }, []);

  const isToday = (agendamento) => {
    const today = new Date();
    const agendamentoDate = new Date(agendamento.date); // Supondo que a data do agendamento esteja no formato ISO 8601
    return agendamentoDate.toDateString() === today.toDateString();
  };

  return (
    <div className='container_agendamento_barber'>
      {atendimentos.length > 0 ? (
        atendimentos.map((atendimento) => (
          <div key={atendimento.id} className='agendamento_container'>
            <div className='agendamento_detalhes_container1'>
              <div className='h2_container_Agendamento'>
                <h2>Dia:</h2>
              </div>
              <div className='content_container'>
                <p>{new Date(atendimento.date).toLocaleDateString("pt-BR")}</p>
              </div>
            </div>
            
            <div className='agendamento_detalhes_container2'>
              <div className='h2_container_Agendamento'>
                <h2>Horário:</h2>
              </div>
              <div className='content_container'>
                <p>{atendimento.time}</p>
              </div>
            </div>

            <div className='agendamento_detalhes_container3'>
              <div className='h2_container_Agendamento'>
                <h2>Serviço:</h2>
              </div>
              <div className='content_container'>
                <p>{servicos[atendimento.id_servico] || "N/A"}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='agendamento_container'>
          <h2>Sem Atendimentos</h2>
        </div>
      )}
    </div>
  );
}