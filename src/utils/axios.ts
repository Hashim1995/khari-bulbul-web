import axios from 'axios';



const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

export default api;