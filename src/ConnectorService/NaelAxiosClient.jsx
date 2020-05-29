import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8080"
    // baseURL: "http://api.nathanael.my.id"
})

export default instance;