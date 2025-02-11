import axios from 'axios';

const fetchAgendamentos = axios.create({
  baseURL: '172.31.43.67:5000', // Altere para a URL do seu back-end
});

export default fetchAgendamentos;