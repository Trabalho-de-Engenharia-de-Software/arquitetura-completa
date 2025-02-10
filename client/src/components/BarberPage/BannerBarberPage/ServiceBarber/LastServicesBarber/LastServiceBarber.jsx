import React, { useState, useEffect } from "react";
import "./LastServiceBarber.css";

export default function LastServiceBarber({ agendamentos }) {
  const [atendimentosHoje, setAtendimentosHoje] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const hoje = new Date().toISOString().split('T')[0]; // Data de hoje no formato YYYY-MM-DD
    const atendimentosDoDia = agendamentos.filter(agendamento => agendamento.data === hoje);
    setAtendimentosHoje(atendimentosDoDia);
  }, [agendamentos]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % atendimentosHoje.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + atendimentosHoje.length) % atendimentosHoje.length);
  };

  if (atendimentosHoje.length === 0) {
    return <div className="atendimentosHoje">
        Sem agendamentos para hoje
        </div>;
  }

  const ultimoItem = atendimentosHoje[currentIndex];

  return (
    <div className="data_container_agendamento">
      <div className="table_container">
        <h3>Cliente:</h3>
        <p>{ultimoItem.nome_cliente}</p>
      </div>
      <div className="table_container">
        <h3>Horário</h3>
        <p>{ultimoItem.data}</p>
        <p>{ultimoItem.horario}</p>
      </div>
      <div className="table_container">
        <h3>Serviço:</h3>
        <p>{ultimoItem.servicos}</p>
      </div>

      <div className="navigation_buttons">
        <button onClick={handlePrev} disabled={atendimentosHoje.length <= 1}>Anterior</button>
        <button onClick={handleNext} disabled={atendimentosHoje.length <= 1}>Próximo</button>
      </div>
    </div>
  );
}