import './FormAgendamento.css';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { fetchDiasDisponiveis, fetchHorariosDisponiveis, createAgendamento } from '../../../../APIs/fetchAgendamentos';
import {fetchServicos} from '../../../../APIs/fetchServicos'

export default function FormAgendamento() {
  const [dataForm, setDataForm] = useState({
    DATA: '', 
    HORA: '',
    SERVICOS: []
  });

  const [servicos, setServicos] = useState([]);
  const [diasDisponiveis, setDiasDisponiveis] = useState([]);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
  const [barberId, setBarberId] = useState(1); // Defina o ID do barbeiro conforme necessário

  useEffect(() => {
    // Buscar serviços ao carregar o componente
    fetchServicos().then(setServicos);

    // Buscar dias disponíveis ao carregar o componente
    fetchDiasDisponiveis(barberId).then(setDiasDisponiveis);
  }, [barberId]);

  useEffect(() => {
    // Buscar horários disponíveis quando a data for selecionada
    if (dataForm.DATA) {
      fetchHorariosDisponiveis(barberId, dataForm.DATA).then(setHorariosDisponiveis);
    }
  }, [dataForm.DATA, barberId]);

  const handleServicoChange = (id, value) => {
    const novosServicos = dataForm.SERVICOS.map((servico, index) => 
      index === id ? value : servico
    );
    setDataForm({
      ...dataForm,
      SERVICOS: novosServicos
    });
  };

  const adicionarServico = () => {
    setDataForm({
      ...dataForm,
      SERVICOS: [...dataForm.SERVICOS, '']
    });
  };

  const removerServico = (id) => {
    const novosServicos = dataForm.SERVICOS.filter((_, index) => index !== id);
    setDataForm({
      ...dataForm,
      SERVICOS: novosServicos
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

  return (
    <div className='FormAgendamento_Container'>
      <div className='resumo_container'>
        <h3 className='h3_resumo'>Data Escolhida:</h3>
        <p className='p_resumo'>{dataForm.DATA}</p>
        <h3 className='h3_resumo'>Hora Escolhida:</h3>
        <p className='p_resumo'>{dataForm.HORA}</p>
        <h3 className='h3_resumo'>Serviços: </h3>
        <p className='p_resumo'>{dataForm.SERVICOS.join(', ')}</p>
      </div>

      <div className='data_form_container'>
        <div className='Label_container'>
          <label className='text_data'>Escolha uma data:</label>
          <input 
            type="date" 
            className='input_choice' 
            name="DATA" 
            value={dataForm.DATA} 
            onChange={handleChange} 
            min={diasDisponiveis.length > 0 ? diasDisponiveis[0] : ''}
            max={diasDisponiveis.length > 0 ? diasDisponiveis[diasDisponiveis.length - 1] : ''}
            list="dias-disponiveis"
          />
          <datalist id="dias-disponiveis">
            {diasDisponiveis.map(dia => (
              <option key={dia} value={dia} />
            ))}
          </datalist>
        </div>

        <div className='Label_container'>
          <label className='text_data'>Escolha um horário:</label>
          <input 
            type="time" 
            className='input_choice' 
            name="HORA" 
            value={dataForm.HORA} 
            onChange={handleChange} 
            list="horarios-disponiveis"
          />
          <datalist id="horarios-disponiveis">
            {horariosDisponiveis.map(hora => (
              <option key={hora} value={hora} />
            ))}
          </datalist>
        </div>

        {dataForm.SERVICOS.map((servico, index) => (
          <div key={index} className='Label_container_choice'>
            <label className='text_data'>Escolha um serviço:</label>
            <select
              className='select_choice'
              value={servico}
              onChange={(e) => handleServicoChange(index, e.target.value)}
            >
              <option value="">Escolha uma opção</option>
              {servicos.map(servico => (
                <option key={servico.id} value={servico.nome}>{servico.nome}</option>
              ))}
            </select>
            {dataForm.SERVICOS.length > 1 && <button type="button" className='remove_button_service' onClick={() => removerServico(index)}>Remover</button>}
          </div>
        ))}
        <div className='buttons_container_service'>
          <button type="button" className='add_service_button' onClick={adicionarServico}>Adicionar Serviço</button>
          <button type="submit" className="confirm_button" onClick={handleSubmit}>Agendar</button>
        </div>
      </div>
    </div>
  );
}