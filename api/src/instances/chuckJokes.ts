import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io/jokes';
export const chuckJokes = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  }
});