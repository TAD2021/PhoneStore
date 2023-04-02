import * as httpRequest from '~/utils/httpRequest';

export const register = async (username, email, password) => {
    try {
        const res = await httpRequest.post('/auth/register', { username, email, password });
        return res;
    } catch (error) {
        console.log(error);
    }
};
