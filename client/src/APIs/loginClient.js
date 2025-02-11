import api from './AxiosPath';

export async function loginCliente(email, senha) {
    try {
        const response = await api.post('/cliente/login', { email, senha });
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
}