import React, { useState } from 'react'
import { useEffect } from 'react';
import './LastServiceBarber.css'

export default function LastServiceBarber() {
    const url = "http://localhost:3000/atendimentos"
    const [ultimoItem, setUltimoItem] = useState(null);

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
        <div className='table_container'><h1>Cliente:</h1>
        <p>{ultimoItem.nome_cliente}</p>
        </div>
        <div className='table_container'>
        <h1>Horário</h1>
        <p>{ultimoItem.data}</p>
        </div>
        <div className='table_container'>
            <h1>Serviço:</h1>
        
        </div>
           
            {/* Adicione mais campos conforme necessário */}
        </div>
  )
}
