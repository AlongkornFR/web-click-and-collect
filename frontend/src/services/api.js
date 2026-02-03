import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', // L'adresse de ton Django
});

export const getProducts = () => api.get('produits/');
export const getCategories = () => api.get('categories/');

export default api;