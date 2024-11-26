import { useState } from 'react'
import './AddServices.css'
import Swal from 'sweetalert2'

export default function AddServices() {

  const [servico, setSevico] = useState()
  const [valorServico, SetValorServico] = useState()

  const handleAddService = () => {
    Swal.fire({
      title: 'Deseja Adicionar um servico?',
      text: 'Preencha os Campos abaixo:',
      input: "text",
      inputLabel: "Digite o Serviço",
      input: 'number',
      inputLabel: 'Digite o valor do Serviço',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.value); // Aqui você pode usar o valor inserido pelo usuário
        Swal.fire({
          title: 'Serviço Adicionado',
          text: 'O serviço foi adicionado com sucesso!',
          icon: 'success'
        });
      } else {
        Swal.fire({
          title: 'Ação Cancelada',
          text: 'Nenhum serviço foi adicionado.',
          icon: 'warning'
        });
      }
    });
  }


  return (
    <div className='add_services_container'>
        <div className='title_services_barber_container'>
            <h1>Seus Serviços</h1>
        </div>
        <div className='services_barber_container'>
          <button className='to_add_button' onClick={handleAddService}>Adicionar Serviço</button>
        </div>
    </div>
  )
}
