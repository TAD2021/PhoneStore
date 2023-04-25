import { orderProduct } from '~/redux/cartSlice';
import * as httpRequest from '~/utils/httpRequest';

export const getAllOrder = async () => {
    try {
        const res = await httpRequest.get('/order');
        return res.orders;
    } catch (error) {
        console.log(error);
    }
};

export const getOrderUser = async (id) => {
    try {
        const res = await httpRequest.get(`/order/${id}`);
        return res.orders;
    } catch (error) {
        console.log(error);
    }
};

export const createOrder = async (data, dispatch) => {
    try {
        await httpRequest.post('/order', { ...data });
        dispatch(orderProduct());
    } catch (error) {
        console.log(error);
    }
};

export const updateOrder = async (id, products, status) => {
    try {
        const res = await httpRequest.put(`/order/${id}`, { products, status });
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

export const deleteOrder = async (id) => {
    try {
        const res = await httpRequest.deleteItem(`/order/${id}`);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};
