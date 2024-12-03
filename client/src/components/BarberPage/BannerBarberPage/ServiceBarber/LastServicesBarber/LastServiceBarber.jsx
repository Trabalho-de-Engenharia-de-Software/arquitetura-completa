import React, { useState } from 'react'
import { useEffect } from 'react';
import './LastServiceBarber.css'

export default function LastServiceBarber() {
    const url = "http://localhost:3000/atendimentos"
    const [ultimoItem, setUltimoItem] = useState(null);


    //USAR API AQUI

    useEffect(() => {
        // Função para buscar o último item do banco de dados
        const fetchUltimoItem = async () => {
            try {
                const response = await fetch(url); // Substitua pela URL da sua API
                const data = await response.json();
                const ultimo = data[data.length - 1]; // Pega o último item da lista
                setUltimoItem(ultimo);
            } catch (error) {
                console.error('Erro ao buscar o último item:', error);
            }
        };

        fetchUltimoItem();
    }, []);

    if (!ultimoItem) {
        return <div>Carregando...</div>;
    }
  return (
    <div className='data_container_agendamento'>
        <div className='table_container'><h3>Cliente:</h3>
        <p>{ultimoItem.nome_cliente}</p>
        </div>
        <div className='table_container'>
        <h3>Horário</h3>
        <p>{ultimoItem.data}</p>
        <p>19h00</p>
        </div>
        <div className='table_container'>
        <h3>Serviço:</h3>
        <p>{ultimoItem.servicos}</p>
        </div>
           
            {/* Adicione mais campos conforme necessário */}
        </div>
  )
}
