import axios from 'axios';

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: 'https://testwalldesign.limsa.uz',
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
