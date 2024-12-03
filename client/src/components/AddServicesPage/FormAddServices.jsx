import React, { useState } from "react";
import "./FormAddServices.css";

export default function FormAddServices() {
  const [services, setServices] = useState([
    { id: Date.now(), NOME: "", PRECO: "", DESCRICAO: "" },
  ]);


  //API AQUI

  const addServiceRow = () => {
    setServices([
      ...services,
      { id: Date.now(), NOME: "", PRECO: "", DESCRICAO: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(services);
    alert(JSON.stringify(services, null, 2));

    // Enviar todos os serviços
    for (const service of services) {
      const serviceData = {
        id: service.id,
        nome_servico: service.NOME,
        valor: service.PRECO,
        observacao: service.DESCRICAO,
      };

      // API de envio de dados
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      });
    }
  };

  return (
    <div className="add_services_container_form">
      <div className="title_add_service_container">
        <div className="arrow_container_add_service">
          <a href="/barberUser">
            <img
              src="./img/arrow_icon.png"
              alt="Seta dourada com a ponta indicando para o lado esquerdo, com a funcionalidade de voltar a index"
            />
          </a>
        </div>
        <h1>Cadastro de Serviços</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {services.map((service, index) => (
          <div key={service.id} className="service-row">
            <input
              type="text"
              name="NOME"
              placeholder="Nome"
              value={service.NOME}
              onChange={service.NOME}
            />
            <input
              type="number"
              name="PRECO"
              placeholder="Preço"
              value={service.PRECO}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="text"
              name="DESCRICAO"
              placeholder="Descrição/Observação"
              value={service.DESCRICAO}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        ))}
        <div className="button_addService_container">
          <button
            type="button"
            onClick={addServiceRow}
            className="Button_Add_Service"
          >
            Adicionar Serviço
          </button>
          <button type="submit" className="Button_Submit_Service">
            Enviar Dados
          </button>
        </div>
      </form>
    </div>
  );
}
