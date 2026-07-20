import axios from "axios";

const api = axios.create({
    baseURL:'http://publisher-website.test',
    withCredentials: true,
    withXSRFToken: true,
})
export default api;

