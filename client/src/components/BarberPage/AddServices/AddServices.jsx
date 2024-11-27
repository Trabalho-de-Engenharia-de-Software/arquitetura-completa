import { useState } from "react";
import "./AddServices.css";
import Swal from "sweetalert2";
import AlertComponent from "./AlertComponent/AlertComponent";

export default function AddServices() {
  const [servicos, setSevicos] = useState([]);
  const [valorServico, SetValorServico] = useState();

  const handleAddService = () => {};

  const handleServiceClick = () => {};

  return (
    <div className="add_services_container">
      <div className="title_services_barber_container">
        <h1>Seus Serviços</h1>
      </div>

      <div className="services_barber_container">
        {servico.length == 0 ? (
          <AlertComponent/>
        ) : (
          <div>

            {/* Imprimr os serviços criados */}
            <div className="services-list">
              {servicos.map((service) => (
                <div
                  key={service.id}
                  className="service-box"
                  onClick={() => handleServiceClick(service.id)}
                >
                  {service.name}
                </div>
              ))}
               <button className='to_add_button' onClick={handleAddService}>Adicionar Serviço</button>
            </div>
            
          </div>
        )}
      </div>
     
    </div>
  );
}
