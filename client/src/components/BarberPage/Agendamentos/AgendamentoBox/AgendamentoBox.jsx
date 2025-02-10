import React, { useState, useEffect } from "react";
import './AgendamentoBox.css';
import Swal from 'sweetalert2';
import { fetchCliente } from '../../../../APIs/fetchClientes';
import { fetchServicos } from '../../../../APIs/fetchServicos';

export default function AgendamentoBox({ atendimentos }) {
  const [cliente, setCliente] = useState(null);
  const [servico, setServico] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const clienteData = await fetchCliente(atendimentos.cliente_id);
        setCliente(clienteData);

        const servicoData = await fetchServicos(atendimentos.id_servico);
        setServico(servicoData);
      } catch (error) {
        console.error('Erro ao buscar detalhes:', error);
      }
    };

    fetchDetails();
  }, [atendimentos.cliente_id, atendimentos.id_servico]);

  const handleNavigate = () => {
    Swal.fire({
      title: "Dados Atendimento",
      html: `
        <p>Nome do Cliente: ${cliente ? cliente.nome : 'Carregando...'}</p>
        <p>Data do Atendimento: ${atendimentos.date}</p>
        <p>Horário: ${atendimentos.time}</p>
        <p>Serviço: ${servico ? servico.nome : 'Carregando...'}</p>
      `,
      icon: "info"
    });
  };

  return (
    <div className="container">
      <div className="Container_data_client">
        <h1>Nome do Cliente: {cliente ? cliente.nome : 'Carregando...'}</h1>
        <h1>Data do Atendimento: {atendimentos.date}</h1>
        <button onClick={handleNavigate}>Saiba Mais</button>
      </div>
    </div>
  );
}