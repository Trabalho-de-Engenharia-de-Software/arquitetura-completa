import './FormAgendamento.css';
import { useState } from 'react';

export default function FormAgendamento() {
  const [dataForm, setDataForm] = useState({
    DATA: '', 
    HORA: '',
    SERVICOS: []
  });

  const [servicos, setServicos] = useState([{ id: 1, value: '' }]);

  const handleServicoChange = (id, value) => {
    const novosServicos = servicos.map(servico => 
      servico.id === id ? { ...servico, value } : servico
    );
    setServicos(novosServicos);
    setDataForm({
      ...dataForm,
      SERVICOS: novosServicos.map(servico => servico.value)
    });
  };

  const adicionarServico = () => {
    setServicos([...servicos, { id: servicos.length + 1, value: '' }]);
  };

  const removerServico = (id) => {
    const novosServicos = servicos.filter(servico => servico.id !== id);
    setServicos(novosServicos);
    setDataForm({
      ...dataForm,
      SERVICOS: novosServicos.map(servico => servico.value)
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
    alert("Feito o Agendamento");
    console.log(dataForm);
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
          <input type="date" className='input_choice' name="DATA" value={dataForm.DATA} onChange={handleChange} />
        </div>

        <div className='Label_container'>
          <label className='text_data'>Escolha um horário:</label>
          <input type="time" className='input_choice' name="HORA" value={dataForm.HORA} onChange={handleChange} />
        </div>

        {servicos.map((servico) => (
          <div key={servico.id} className='Label_container_choice'>
            <label className='text_data'>Escolha um serviço:</label>
            <select
              className='select_choice'
              value={servico.value}
              onChange={(e) => handleServicoChange(servico.id, e.target.value)}
            >
              <option value="none">Escolha uma opção</option>
              <option value="Corte de Cabelo">Corte de Cabelo</option>
              <option value="Barba">Barba</option>
              <option value="Luzes">Luzes</option>
            </select>
            {servicos.length > 1 &&  <button type="button" className='remove_button_service' onClick={() => removerServico(servico.id)}>Remover</button>}
           
          </div>
        ))}
        <div className='buttons_container_service'>
        <button type="button" className='add_service_button' onClick={adicionarServico}>Adicionar Serviço</button>
        <button type="submit" className = "confirm_button" onClick={handleSubmit}>Agendar</button>
        </div>
      </div>
    </div>
  );
}