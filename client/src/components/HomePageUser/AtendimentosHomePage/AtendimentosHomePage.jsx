import './AtendimentosHomePage.css'
import FormAgendamento from './FormAgendamento/FormAgendamento'

export default function AtendimentosHomePage() {
  return (
    <div className='atendimento_container'>
        <h2>Marcar Agendamento:</h2>
      <FormAgendamento/>
    </div>
  )
}
