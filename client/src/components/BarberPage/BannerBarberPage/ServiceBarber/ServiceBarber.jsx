import './ServiceBarber.css'
import { useState } from 'react'

export default function ServiceBarber() {
    const [state, setState] = useState(1)

    return (
      <div>
          {state == 1 ? (
              <div className='agendamento_container'>
              <h2>Sem Atendimentos</h2>
             
              </div>
          ) : ('')}
      </div>
    )
}
