import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (username, password) => {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
  },

  register: async (username, password, email) => {
    const response = await api.post('/auth/register', { username, password, email });
    return response.data;
  },

  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

// Notice API
export const noticeAPI = {
  getAll: async () => {
    const response = await api.get('/notices');
    return response.data;
  },

  getOne: async (id) => {
    const response = await api.get(`/notices/${id}`);
    return response.data;
  },

  create: async (title, description) => {
    const response = await api.post('/notices', { title, description });
    return response.data;
  },

  update: async (id, title, description) => {
    const response = await api.put(`/notices/${id}`, { title, description });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/notices/${id}`);
    return response.data;
  },
};

export default api;
