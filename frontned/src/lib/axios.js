import axios from "axios"

const api = axios.create({
    baseURL:"http://backend.test/",
    withCredentials:true,
    withXSRFToken:true,
});

export default api