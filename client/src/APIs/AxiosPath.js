import axios from 'axios';

const fetchAgendamentos = axios.create({
  baseURL: 'http://localhost:5000/api', // Altere para a URL do seu back-end
});

export default fetchAgendamentos;