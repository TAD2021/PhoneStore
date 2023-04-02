import * as httpRequest from '~/utils/httpRequest';

export const login = async (username, password) => {
    console.log(username, password)
    try {
        const res = await httpRequest.post('/auth/login',  {username, password} );
        return res;
    } catch (error) {
        console.log(error);
    }
};
