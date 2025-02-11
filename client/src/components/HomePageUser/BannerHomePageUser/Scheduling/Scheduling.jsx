import { useState, useEffect } from "react";
import "./Scheduling.css";
import { fetchAgendamentos } from "../../../../APIs/fetchAgendamentos"; // Importe as funções para buscar agendamentos e serviços
import { useAuth } from "../../../../Auth/AuthContext"; // Importe o contexto de autenticação
import {
  fetchServicos,
  fetchServicosById,
} from "../../../../APIs/fetchServicos";

export default function Scheduling() {
  const { user } = useAuth();
  const [ultimoAgendamento, setUltimoAgendamento] = useState(null);
  const [servicoNome, setServicoNome] = useState("");

  useEffect(() => {
    console.log("User:", user); // Log do usuário
    if (user) {
      fetchAgendamentos()
        .then((agendamentos) => {
          console.log("Agendamentos:", agendamentos); // Log dos agendamentos recebidos
          const agendamentosCliente = agendamentos.filter(
            (agendamento) => agendamento.cliente_id === user.id
          );
          console.log("Agendamentos do Cliente:", agendamentosCliente); // Log dos agendamentos do cliente
          if (agendamentosCliente.length > 0) {
            const ultimo = agendamentosCliente.reduce((prev, current) => {
              const prevDate = new Date(`${prev.date}T${prev.time}`);
              const currentDate = new Date(`${current.date}T${current.time}`);
              return currentDate > prevDate ? current : prev;
            });
            console.log("Último Agendamento:", ultimo); // Log do último agendamento
            setUltimoAgendamento(ultimo);

            // Buscar o nome do serviço pelo ID
            fetchServicosById(ultimo.id_servico)
              .then((servico) => {
                console.log("Serviço encontrado:", servico); // Log do serviço encontrado
                setServicoNome(servico.nome);
              })
              .catch((error) => {
                console.error("Erro ao buscar serviço:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar agendamentos:", error);
        });
    }
  }, [user]);

  return (
    <div>
      {ultimoAgendamento ? (
        <div className="agendamento_container">
          <div className="agendamento_detalhes_container1">
            <div className="h2_container_Agendamento">
              <h2>Dia:</h2>
            </div>
            <div className="content_container">
              <p>{new Date(ultimoAgendamento.date).toLocaleDateString("pt-BR")}</p>
            </div>
          </div>
          
          <div className="agendamento_detalhes_container2">
            <div className="h2_container_Agendamento">
              <h2>Horário:</h2>
            </div>
            <div className="content_container">
            <p>{ultimoAgendamento.time}</p>
            </div>
          </div>

          <div className="agendamento_detalhes_container3" id="agenamentounico">
            <div className="h2_container_Agendamento">
              <h2>Serviço:</h2>
            </div>
            <div className="content_container">
            <p>{servicoNome || "N/A"}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="agendamento_containeroption2">
          <h2>Sem Agendamentos</h2>
          <button>Agende Já</button>
        </div>
      )}
    </div>
  );
}
