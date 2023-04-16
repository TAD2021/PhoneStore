import * as addressRequest from '~/utils/addressRequest';
import * as searchProvincesRequest from '~/utils/searchProvincesRequest';
import * as searchDistristsRequest from '~/utils/searchDistristsRequest';
import * as searchWardsRequest from '~/utils/searchWardsRequest';

export const getAddress = async () => {
    try {
        const res = await addressRequest.get('?depth=3');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const searchProvinces = async (data) => {
    try {
        const res = await searchProvincesRequest.get(`?q=${data}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const searchDistrists = async (data) => {
    try {
        const res = await searchDistristsRequest.get(`?q=${data}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const searchWards = async (data) => {
    try {
        const res = await searchWardsRequest.get(`?q=${data}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
