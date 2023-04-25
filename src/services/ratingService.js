import * as httpRequest from '~/utils/httpRequest';

export const getRatingByProduct = async (id) => {
    try {
        const res = await httpRequest.get(`/rating/${id}`);
        return res?.rating;
    } catch (error) {
        console.log(error);
    }
};

export const getAllRating = async () => {
    try {
        const res = await httpRequest.get(`/rating`);
        return res?.rating;
    } catch (error) {
        console.log(error);
    }
};

export const createRating = async (data) => {
    try {
        const res = await httpRequest.post(`/rating`, { ...data });
        alert('Đánh giá sản phẩm thành công');
        return res?.rating;
    } catch (error) {
        console.log(error);
    }
};
