import api from './AxiosPath';

export async function loginBarber(email, senha) {
    try {
        const response = await api.post('/barber/login', { email, senha });
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
}