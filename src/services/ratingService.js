import * as ratingRequest from '~/utils/ratingRequest';

export const getRatingByProduct = async (id) => {
    try {
        const res = await ratingRequest.get(`/rating/${id}`);
        return res?.rating;
    } catch (error) {
        console.log(error);
    }
};

export const createRating = async (data) => {
    try {
        const res = await ratingRequest.post(`/rating`, { ...data });
        alert('Đánh giá sản phẩm thành công');
        return res?.rating;
    } catch (error) {
        console.log(error);
    }
};
