import React, { useState, useEffect } from "react";
import AgendamentoBox from "./AgendamentoBox/AgendamentoBox";
import "./AgendamentosBarber.css";
import { fetchAgendamentos, createAgendamento } from "../../../APIs/fetchAgendamentos";

export default function AgendamentosBarber() {
  const [atendimentos, setAtendimentos] = useState([]);

  useEffect(() => {
    const getAgendamentos = async () => {
      const data = await fetchAgendamentos()
      setAtendimentos(data);
    };

    getAgendamentos();

    console.log(atendimentos);
  }, []);


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
              <AgendamentoBox atendimentos={atendimento} key={atendimento.AGENDAMENTO_ID} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
