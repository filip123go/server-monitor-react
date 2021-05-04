import axios from "axios";

const url = "/actuator"

export const fetchMappings = async () => {
    try {
        return await axios.get(`${url}/mappings`);
    } catch (error) {
    }
}


export const fetchHealth = async () => {
    try {
        return axios.get(`${url}/health`);
    } catch (error) {
    }
}

export const fetchInfo = async () => {
    try {
        return axios.get(`${url}/info`);
    } catch (error) {
    }
}
