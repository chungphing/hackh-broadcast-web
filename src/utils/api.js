import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


const sendMessage = (options) => instance.post('/send', options);

export default {
  fetchConfirmedCases,
  sendMessage,
};
