import * as productRequest from '~/utils/productRequest';

export const getAllProduct = async () => {
    try {
        const res = await productRequest.get(`/product`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const searchProduct = async (q) => {
    try {
        const res = await productRequest.get(`/product?q=${q}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getAProduct = async (id) => {
    try {
        const res = await productRequest.get(`/product/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const createProduct = async (data) => {
    try {
        const res = await productRequest.post(`/product`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateProduct = async (id, data) => {
    try {
        const res = await productRequest.put(`/product/${id}`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteProduct = async (id) => {
    try {
        const res = await productRequest.deleteProduct(`/product/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
