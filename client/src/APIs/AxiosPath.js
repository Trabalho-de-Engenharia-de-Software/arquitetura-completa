import axios from 'axios';

const AxiosPath = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // Altere para a URL do seu back-end
});

export default AxiosPath;