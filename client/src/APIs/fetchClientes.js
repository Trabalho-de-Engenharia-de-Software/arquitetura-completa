import api from './AxiosPath'

export async function fetchServicos() {
    try {
        const path = `/clientes`;
        const response = await api.get(path);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar serviços:', error);
        return [];
    }
}

// Função para buscar detalhes do cliente por ID
export async function fetchCliente(clientId) {
    try {
        const path = `/cliente/${clientId}`;
        const response = await api.get(path);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar cliente:', error);
        return null;
    }
}