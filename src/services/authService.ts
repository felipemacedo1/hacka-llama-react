import axios from 'axios';
import { getToken } from './authUtils';

const api = axios.create({
  baseURL: 'https://sua-api-base-url.com', // Atualize com sua base URL
});

// Login com email e senha
export const login = async (email: string, senha: string) => {
  try {
    const resposta = await api.post('/auth/login', { email, senha });
    return resposta.data;
  } catch (error) {
    throw error;
  }
};
//envia o token na requisição
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Login com Google
export const loginComGoogle = async (token: string) => {
  try {
    const resposta = await api.post('/auth/google', { token });
    return resposta.data;
  } catch (error) {
    throw error;
  }
};

// Registro de novo usuário
export const registrar = async (dados: any) => {
  try {
    const resposta = await api.post('/auth/registrar', dados);
    return resposta.data;
  } catch (error) {
    throw error;
  }
};

// Logout
export const logout = async () => {
  try {
    await api.post('/auth/logout');
  } catch (error) {
    throw error;
  }
};
