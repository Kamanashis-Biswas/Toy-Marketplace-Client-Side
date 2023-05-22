import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000/api/",
    //baseURL: "https://assignment-11-server-side-kamanashiscse.vercel.app/api/",
    withCredentials: true,
    headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
    }
    // headers: {'X-Custom-Header': 'foobar', "Content-Type":"application/json"}

});

export default api;