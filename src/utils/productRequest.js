import axios from 'axios';

const productRequest = axios.create({
    baseURL: process.env.REACT_APP_PRODUCT_URL,
});

export const get = async (path, options = {}) => {
    const response = await productRequest.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await productRequest.post(path, options);
    return response.data;
};

export const put = async (path, options = {}) => {
    const response = await productRequest.put(path, options);
    return response.data;
};

export const deleteProduct = async (path, options = {}) => {
    const response = await productRequest.delete(path, options);
    return response.data;
};

export default productRequest;
