import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://13.233.206.42/api/'
});

export default instance;