import './FormAgendamento.css'
import { useState } from 'react'

export default function FormAgendamento() {

    
    const [dataForm, setDataForm] = useState({
      DATA: '', 
      HORA: '',
      SERVICO: ''
    })

   


    const handleChange = (e) => {
      const { name, value } = e.target;
      setDataForm({
        ...dataForm,
        [name]: value,
      });
    };

    const handleSubmit = () =>{
      alert("Feito o Agendamento")
    }
  
  return (
    <div className='FormAgendamento_Container'>
      <div className='resumo_container'>
        <h3 className='h3_resumo'>Data Escolhida: {dataForm.DATA}</h3>
        <h3 className='h3_resumo'>Hora Escolhida: {dataForm.HORA}</h3>
        <h3 className='h3_resumo'>Serviços: {dataForm.SERVICO}</h3>
      </div>

      <div className='data_form_container'>
          <div className='Label_container'>
            <label className='text_data'>Escolha uma data:</label>
            <input type="date" className='input_choice' name="DATA" value={dataForm.DATA} onChange={handleChange}/>
          </div>

          <div className='Label_container'>
            <label className='text_data'>Escolha um horário:</label>
            <input type="time" className='input_choice' name="HORA" value={dataForm.HORA} onChange={handleChange}/>
          </div>

          <div className='Label_container'>
            <label className='text_data'>Escolha um serviço:</label>
            <select type="select" className='input_choice' name="SERVICO" value={dataForm.SERVICO} onChange={handleChange}>
              <option value="none">Escolha uma opção</option>
              <option value="corte">Corte de Cabelo</option>
              <option value="barba">Barba</option>
              <option value="luzes">Luzes</option>
            </select>
          </div>

          <button onClick={handleSubmit}></button>
      </div>
    </div>
  )
}
