import api from './AxiosPath'

// Função para buscar todos os agendamentos
export async function fetchAgendamentos() {
    try {
        const path = `/agendamento/consulta`;
        const response = await api.get(path);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
        return [];
    }
}

// Função para criar um novo agendamento
export async function createAgendamento(agendamento) {
    try {
        const path = `/agendamento/agendar`;
        const response = await api.post(path, agendamento);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar agendamento:', error);
        return null;
    }
}