import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-8d348.cloudfunctions.net/api', // cloud function url
    //http://localhost:5001/clone-8d348/us-central1/api
});

export default instance;
