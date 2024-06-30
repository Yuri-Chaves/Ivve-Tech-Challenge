import axios from 'axios';

const BASE_URL = 'https://chuck-ivve-api.onrender.com';
export const chuckJokes = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  }
});