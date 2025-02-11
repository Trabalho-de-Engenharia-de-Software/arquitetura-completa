import api from './AxiosPath';

export async function loginUser(email, senha, userType) {
    try {
        const endpoint = userType === 'cliente' ? '/cliente/login' : '/barber/login';
        const response = await api.post(endpoint, { email, senha });
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
}