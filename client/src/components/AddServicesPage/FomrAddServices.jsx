import React, { useState } from 'react';

export default function FormAddServices() {
  const [services, setServices] = useState([{ id: Date.now(), NOME: '', PRECO: '', DESCRICAO: '' }]);
  const url = 'http://localhost:3000/servicos';

  const addServiceRow = () => {
    setServices([...services, { id: Date.now(), NOME: '', PRECO: '', DESCRICAO: '' }]);
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });
    }
  };

  return (
    <div>
      <h1>Cadastro de Serviços</h1>
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
        <button type="button" onClick={addServiceRow}>Adicionar Serviço</button>
        <button type="submit">Enviar Dados</button>
      </form>
    </div>
  );
}