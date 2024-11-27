import { useEffect, useState } from "react";
import "./AddServices.css";
import Swal from "sweetalert2";
import AlertComponent from "./AlertComponent/AlertComponent";
import { useNavigate } from "react-router";

export default function AddServices() {
  const [servicos, setSevicos] = useState([]);
  const navigate = useNavigate();

  //API
  const url = "http://localhost:3000/servicos"


  //Primeira parte da API, usando o fetch diretamente no código
  useEffect (() => {
    const fetchServicos = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setSevicos(data)
    }

    fetchServicos()
    
    console.log(servicos)
  }, [url])
  //Fim da API com o JSON Server

 
//Comando para fazer o direcionamento para outra página
  const handleAddService = () => {
    navigate('/addservice')
  };

  const handleServiceClick = () => {};

  return (
    <div className="add_services_container">
      <div className="title_services_barber_container">
        <h1>Seus Serviços</h1>
      </div>

      <div className="services_barber_container">
        {servicos.length == 0 ? (
          <AlertComponent/>
        ) : (
          <div className="services_list_container">

            {/* Imprimr os serviços criados, usamos MAP pois é um array*/}
            <div className="services-list">
              {servicos.map((service) => (
                <div
                  key={service.id}
                  className="service-box"
                  onClick={() => handleServiceClick(service.id)}
                >
                  {service.nome_servico}
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
