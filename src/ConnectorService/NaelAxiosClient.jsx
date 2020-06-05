import axios from 'axios';

const instance = axios.create({
    // baseURL: "http://api.nathanael.my.id"
    baseURL: "http://localhost:8080"
})

export default instance;