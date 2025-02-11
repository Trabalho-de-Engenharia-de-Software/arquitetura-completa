import api from './AxiosPath'

export async function getClient() {
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

export async function createClient(clientData) {
    try {
        const path = `/cliente/registro`;
        const response = await api.post(path, clientData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        return null;
    }
}