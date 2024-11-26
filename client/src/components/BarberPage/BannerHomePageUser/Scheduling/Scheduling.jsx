import { useState } from 'react'
import './Scheduling.css'

export default function Scheduling() {

    const [state, setState] = useState(1)

  return (
    <div>
        {state == 1 ? (
            <div className='agendamento_container'>
            <h2>Sem Agendamentos</h2>
            <button>Agende Já</button>
            </div>
        ) : ('')}
    </div>
  )
}
