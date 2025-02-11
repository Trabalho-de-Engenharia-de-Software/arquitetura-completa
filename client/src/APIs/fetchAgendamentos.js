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

// Função para buscar dias disponíveis
export async function fetchDiasDisponiveis(barberId) {
    try {
        const path = `/agendamento/disponiveis?barber_id=${barberId}`;
        const response = await api.get(path);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dias disponíveis:', error);
        return [];
    }
}

export async function fetchHorariosDisponiveis(barberId, date) {
    try {
        const path = `/agendamento/disponiveis?barber_id=${barberId}&date=${date}`;
        const response = await api.get(path);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar horários disponíveis:', error);
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