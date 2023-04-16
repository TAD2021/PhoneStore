import { orderProduct } from '~/redux/cartSlice';
import * as orderRequest from '~/utils/orderRequest';

export const getAllOrder = async () => {
    try {
        const res = await orderRequest.get('/order');
        return res.orders;
    } catch (error) {
        console.log(error);
    }
};

export const getOrderUser = async (id) => {
    try {
        const res = await orderRequest.get(`/order/${id}`);
        return res.orders;
    } catch (error) {
        console.log(error);
    }
};

export const createOrder = async (data, navigate, dispatch) => {
    try {
        await orderRequest.post('/order', { ...data });
        dispatch(orderProduct());
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};

export const updateOrder = async (id, status) => {
    try {
        const res = await orderRequest.put(`/order/${id}`, { status });
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

export const deleteOrder = async (id) => {
    try {
        const res = await orderRequest.deleteOrder(`/order/${id}`);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};
