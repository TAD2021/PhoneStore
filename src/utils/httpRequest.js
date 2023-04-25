import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_URL,
    withCredentials: true,
});

export const get = async (path, options = {}, headers = {}) => {
    const response = await httpRequest.get(path, options, headers);
    return response.data;
};

export const post = async (path, options = {}, headers = {}) => {
    const response = await httpRequest.post(path, options, headers);
    return response.data;
};

export const patch = async (path, options = {}, headers = {}) => {
    const response = await httpRequest.patch(path, options, headers);
    return response.data;
};

export const put = async (path, options = {}, headers = {}) => {
    const response = await httpRequest.put(path, options, headers);
    return response.data;
};

export const deleteItem = async (path, options = {}, headers = {}) => {
    const response = await httpRequest.delete(path, options, headers);
    return response.data;
};

export default httpRequest;
