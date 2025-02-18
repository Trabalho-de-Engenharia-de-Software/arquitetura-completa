import './FormAgendamento.css';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { fetchAgendamentos, createAgendamento } from '../../../../APIs/fetchAgendamentos';
import { fetchServicos } from '../../../../APIs/fetchServicos';
import { useAuth } from '../../../../Auth/AuthContext';

export default function FormAgendamento() {
  const { user } = useAuth();
  const [dataForm, setDataForm] = useState({
    cliente_id: user ? user.id : '',
    date: '',
    time: '',
    id_servico: 0
  });

  const [servicos, setServicos] = useState([]);
  const [dias, setDias] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    fetchServicos().then(setServicos);
    fetchAgendamentos().then(data => {
      setAgendamentos(data);
      console.log(data); // Imprime os agendamentos no console
    });
    gerarDias();
  }, []);

  const gerarDias = () => {
    const dias = [];
    const hoje = new Date();
    for (let i = 0; i < 7; i++) {
      const dia = new Date(hoje);
      dia.setDate(hoje.getDate() + i);
      dias.push(dia);
    }
    setDias(dias);
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setDataForm({
      ...dataForm,
      date: formattedDate,
      time: '' // Limpa o horário ao mudar de dia
    });
  };

  const handleTimeChange = (time) => {
    setDataForm({
      ...dataForm,
      time: time
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!dataForm.date || !dataForm.time || !dataForm.id_servico) {
      Swal.fire({
        title: 'Erro',
        text: 'Por favor, selecione todos os campos antes de agendar.',
        icon: 'error'
      });
      return;
    }

    Swal.fire({
      title: 'Atenção',
      text: 'Deseja fazer o agendamento?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      showConfirmButton: true,
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        const horarioIndisponivel = agendamentos.some(agendamento => 
          agendamento.date === dataForm.date && agendamento.time === dataForm.time
        );

        if (horarioIndisponivel) {
          Swal.fire({
            title: 'Horário Indisponível',
            text: `O horário ${dataForm.time} já está ocupado. Escolha outro horário.`,
            icon: 'error'
          });
        } else {
          createAgendamento(dataForm).then(response => {
            if (response) {
              Swal.fire({
                title: 'Agendamento Confirmado',
                text: 'Agendamento marcado com sucesso',
                icon: 'success'
              });
              fetchAgendamentos().then(setAgendamentos); // Atualiza os agendamentos após agendar
            } else {
              Swal.fire({
                title: 'Horário Indisponivel',
                text: 'Horário indisponivel para Agendamento. Por favor, marque outro horário.',
                icon: 'error'
              });
            }
          });
        }
      }
    });
  };

  const formatarDataBrasileira = (data) => {
    if (!data) return '';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const getServicoNome = (id) => {
    const servico = servicos.find(servico => servico.id === parseInt(id));
    return servico ? servico.nome : '';
  };

  return (
    <div className='FormAgendamento_Container'>
      <div className='resumo_container'>
        <h3 className='h3_resumo'>Data Escolhida:</h3>
        <p className='p_resumo'>{formatarDataBrasileira(dataForm.date)}</p>
        <h3 className='h3_resumo'>Hora Escolhida:</h3>
        <p className='p_resumo'>{dataForm.time}</p>
        <h3 className='h3_resumo'>Serviço Escolhido:</h3>
        <p className='p_resumo'>{getServicoNome(dataForm.id_servico)}</p>
      </div>

      <div className='data_form_container'>
        <div className='Label_container'>
          <label className='text_data'>Escolha uma data:</label>
          <div className='dias_container'>
            {dias.map(dia => (
              <button
                key={dia.toISOString().split('T')[0]}
                className={`dia_botao ${dataForm.date === dia.toISOString().split('T')[0] ? 'selected' : ''}`}
                onClick={() => handleDateChange(dia)}
              >
                {dia.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric' })}
              </button>
            ))}
          </div>
        </div>

        {dataForm.date && (
          <div className='Label_container'>
            <label className='text_data'>Escolha um horário:</label>
            <div className='horarios_container'>
              {Array.from({ length: 12 }, (_, i) => 9 + i).map(hora => {
                const horaFormatada = `${hora.toString().padStart(2, '0')}:00`;
                return (
                  <button
                    key={horaFormatada}
                    className={`horario_botao ${dataForm.time === horaFormatada ? 'selected' : ''}`}
                    onClick={() => handleTimeChange(horaFormatada)}
                  >
                    {horaFormatada}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className='Label_container_choice'>
          <label className='text_data'>Escolha um serviço:</label>
          <select
            className='select_choice'
            value={dataForm.id_servico}
            onChange={(e) => setDataForm({ ...dataForm, id_servico: e.target.value })}
          >
            <option value="">Escolha uma opção</option>
            {servicos.map(servico => (
              <option key={servico.id} value={servico.id}>{servico.nome}</option>
            ))}
          </select>
        </div>

        <div className='buttons_container_service'>
          <button type="submit" className="confirm_button" onClick={handleSubmit}>Agendar</button>
        </div>
      </div>
    </div>
  );
}