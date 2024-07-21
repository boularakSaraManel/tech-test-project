import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api', // Replace with your Laravel API base URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // To include credentials in the request
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Replace with your token retrieval logic
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
