import React, { useState, useEffect } from "react";
import AgendamentoBox from "./AgendamentoBox/AgendamentoBox";
import "./AgendamentosBarber.css";

export default function AgendamentosBarber() {
  const url = "http://localhost:3000/atendimentos";
  const [atendimentos, setAtendimentos] = useState([]);

  //Primeira parte da API, usando o fetch diretamente no código
  useEffect(() => {
    const fetchAgendamentos = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setAtendimentos(data);
    };

    fetchAgendamentos();

    console.log(atendimentos);
  }, [url]);
  //Fim da API com o JSON Server

  return (
    <div className="All_Agendamentos_Container">
        <div><img src="./img/GoldLine.png" alt="" /></div>
      <div>
        <h1 className="title_All_Agendamentos_Container">
          Todos seus os atendimentos:
        </h1>
      </div>

      <div className="if_data_container">
        {atendimentos.length == 0 ? (
          <div className="option2_agendamentos">
            <h2>Sem agendamentos no momento</h2>
          </div>
        ) : (
          <div className="Map_data_atendimentos_container">
            {/* Imprimr os serviços criados, usamos MAP pois é um array*/}

            {atendimentos.map((atendimento) => (
              <AgendamentoBox atendimentos={atendimento} key={atendimento.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
