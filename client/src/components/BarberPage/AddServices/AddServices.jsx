import { useEffect, useState } from "react";
import "./AddServices.css";
import Swal from "sweetalert2";
import AlertComponent from "./AlertComponent/AlertComponent";
import { useNavigate, useParams } from "react-router";
import { fetchServicos } from '../../../APIs/fetchServicos';

export default function AddServices() {
  const [servicos, setSevicos] = useState([]);
  const navigate = useNavigate();
  const { barberId } = useParams(); // Obtenha o barberId da URL

  // Primeira parte da API, usando o fetch diretamente no código
  useEffect(() => {
    const getServicos = async () => {
      const data = await fetchServicos();
      setSevicos(data);
    };

    getServicos();
    
    console.log(servicos);
  }, []);

  // Comando para fazer o direcionamento para outra página
  const handleAddService = () => {
    navigate(`/addservice/${barberId}`); // Passe o barberId na URL
  };

  const handleServiceClick = () => {};

  return (
    <div className="add_services_container">
      <div className="title_services_barber_container">
        <h1>Seus Serviços</h1>
      </div>

      <div className="services_barber_container">
        {servicos.length === 0 ? (
          <AlertComponent />
        ) : (
          <div className="services_list_container">
            {/* Imprimir os serviços criados, usamos MAP pois é um array */}
            <div className="services-list">
              {servicos.map((service) => (
                <div
                  key={service.id}
                  className="service-box"
                  onClick={() => handleServiceClick(service.id_servico)}
                >
                  {service.nome}
                </div>
              ))}
            </div>
            <button className='to_add_button' onClick={handleAddService}>Adicionar Serviço</button>
          </div>
        )}
      </div>
    </div>
  );
}