import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example.com/api/v3'
});

export const getData = async () => {
  try {
    const { data } = await api.get('/path');

    return data;
  } catch (error) {
    console.error(error);
  }
};
