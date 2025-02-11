import './FormAgendamento.css';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { fetchDiasDisponiveis, createAgendamento } from '../../../../APIs/fetchAgendamentos';
import { fetchServicos } from '../../../../APIs/fetchServicos';
import { useAuth } from '../../../../Auth/AuthContext'; // Importe o contexto de autenticação

export default function FormAgendamento() {
  const { user } = useAuth();
  const [dataForm, setDataForm] = useState({
    cliente_id: user ? user.id : '', // Obtém o ID do cliente do contexto
    date: '', 
    time: '',
    id_servico: 0 // Inicialize com um valor padrão
  });

  const [servicos, setServicos] = useState([]);
  const [diasDisponiveis, setDiasDisponiveis] = useState([]);
  const [barberId, setBarberId] = useState(1); // Defina o ID do barbeiro conforme necessário

  useEffect(() => {
    // Buscar serviços ao carregar o componente
    fetchServicos().then(setServicos);

    // Buscar dias disponíveis ao carregar o componente
    fetchDiasDisponiveis(barberId).then(setDiasDisponiveis);
  }, [barberId]);

  const handleServicoChange = (id, value) => {
    setDataForm({
      ...dataForm,
      id_servico: value // Atualize o ID do serviço
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataForm); // Verifique os dados antes de enviar
    Swal.fire({
      title: 'Atenção',
      text: 'Deseja fazer o agendamento?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar Agendamento',
      showConfirmButton: true,
      confirmButtonText: 'Confirmar agendamento'
    }).then((result) => {
      if (result.isConfirmed) {
        createAgendamento(dataForm).then(response => {
          if (response) {
            Swal.fire({
              title: 'Agendamento Confirmado',
              text: 'Agendamento marcado com sucesso',
              icon: 'success'
            });
          } else {
            Swal.fire({
              title: 'Erro',
              text: 'Erro ao marcar agendamento',
              icon: 'error'
            });
          }
        });
      } else {
        Swal.fire({
          title: 'Agendamento Excluido',
          text: 'Agendamento Cancelado com sucesso!',
          icon: 'success'
        });
      }
    });
  };

  // Função para obter o nome do serviço selecionado
  const getServicoNome = (id) => {
    const servico = servicos.find(servico => servico.id === parseInt(id));
    return servico ? servico.nome : '';
  };

  // Função para formatar a data no formato brasileiro
  const formatarDataBrasileira = (data) => {
    if (!data) return '';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
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
          <input 
            type="date" 
            className='input_choice' 
            name="date" 
            value={dataForm.date} 
            onChange={handleChange} 
          />
        </div>

        <div className='Label_container'>
          <label className='text_data'>Escolha um horário:</label>
          <input 
            type="time" 
            className='input_choice' 
            name="time" 
            value={dataForm.time} 
            onChange={handleChange} 
          />
        </div>

        <div className='Label_container_choice'>
          <label className='text_data'>Escolha um serviço:</label>
          <select
            className='select_choice'
            value={dataForm.id_servico}
            onChange={(e) => handleServicoChange(null, e.target.value)}
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