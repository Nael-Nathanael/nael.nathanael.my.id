import axios from 'ConnectorService/NaelAxiosClient';

export function getAll() {
    return axios.get("/blog/get-all");
}

export function get(id) {
    return axios.get(`/blog/${id}`);
}

export function post(data) {
    return axios.post("/blog/add_or_update", data);
}

export function del(id) {
    return axios.delete(`/blog/delete/${id}`);
}