import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://us-central1-clone-75070.cloudfunctions.net/api'

    // baseURL: 'http://localhost:5001/clone-75070/us-central1/api'
});

export default instance;