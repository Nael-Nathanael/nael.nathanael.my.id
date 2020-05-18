import axios from 'axios';

const instance = axios.create({
    baseURL: "http://api.nathanael.my.id"
})

export default instance;