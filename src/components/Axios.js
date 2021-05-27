import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-8d348/us-central1/api', // cloud function url
});

export default instance;
