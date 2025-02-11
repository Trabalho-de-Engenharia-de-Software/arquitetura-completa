import api from './AxiosPath';

// Função para buscar todos os serviços
export async function fetchServicos() {
    try {
        const path = `/servico/consulta`;
        const response = await api.get(path);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar serviços:', error);
        return [];
    }
}

export const fetchServicosById = async (idServico) => {
    try {
        const path = `/servico/consulta/${idServico}`;
        const response = await api.get(path);
        console.log("Dados do serviço:", response.data); // Verifique a estrutura dos dados aqui
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar serviço:', error);
    }
};

// Função para criar um novo serviço
export async function createServico(servico) {
    try {
        const path = `/servico/registro`;
        const response = await api.post(path, servico);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar serviço:', error);
        return null;
    }
}