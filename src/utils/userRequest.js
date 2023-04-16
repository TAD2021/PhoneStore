import axios from 'axios';

const userRequest = axios.create({
    baseURL: process.env.REACT_APP_USER_URL,
    withCredentials: true,
});

export const get = async (path, options = {}) => {
    const response = await userRequest.get(path, options);
    return response.data;
};

export const post = async (path, options = {}, headers = {}) => {
    const response = await userRequest.post(path, options, headers);
    return response.data;
};

export default userRequest;
