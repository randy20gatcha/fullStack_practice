// For setting up a connector to the backend, for hitting different endpoints
import axios from "axios";

export default () => {
    return axios.create({
        baseURL: `http://localhost:8081/`
    });
}