import { useState } from "react";
import './AgendamentoBox.css'
import Swal from 'sweetalert2'

export default function AgendamentoBox({atendimentos}) {

    const handleNavigate = () =>{
        Swal.fire({
            title: "Dados Atendimento",
            html: `<p>Nome do Cliente: ${atendimentos.nome_cliente}</p>
                   <p>Data do Atendimento: ${atendimentos.data}</p>`,
            icon: "info"
        });
    }
      
    return (
          <div className="container">
            <div className="Container_data_client">
              <h1>Nome do Cliente: {atendimentos.nome_cliente}</h1>
              <h1>Data do Atendimento: {atendimentos.data}</h1>
              <button onClick={handleNavigate}>Saiba Mais</button>
            </div>
          </div>
        );
};

