import axios from 'axios';

const ratingRequest = axios.create({
    baseURL: process.env.REACT_APP_RATING_URL,
});

export const get = async (path, options = {}) => {
    const response = await ratingRequest.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await ratingRequest.post(path, options);
    return response.data;
};

export default ratingRequest;
