import axios from 'ConnectorService/NaelAxiosClient';

export function login(username, password) {
    return axios.get("/login",
        {
            headers: {
                authorization: createBasicAuthToken(username, password)
            }
        }
    ).then(() => axios.defaults.headers.common['Authorization'] = createBasicAuthToken(username, password));
}

function createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ":" + password);
}