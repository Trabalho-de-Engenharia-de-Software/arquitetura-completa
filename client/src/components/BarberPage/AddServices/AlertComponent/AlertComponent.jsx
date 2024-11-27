import React from 'react'
import './AlertComponent.css'

export default function AlertComponent() {

    const handleAddService = () => {};

  return (
    <div className='Alert_container'>
        <h2 className='Alert_Inform'>Sem serviços Adicionados</h2>

        <button className='alert_component_to_add_button' onClick={handleAddService}>Adicionar Serviço</button>
    </div>
  )
}
