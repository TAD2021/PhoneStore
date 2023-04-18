import {
    registerFailed,
    registerStart,
    registerSuccess,
    loginFailed,
    loginStart,
    loginSuccess,
    logoutStart,
    logoutSuccess,
    logoutFailed,
    updateStart,
    updateSuccess,
    updateFailed,
} from '~/redux/authSlice';
import * as userRequest from '~/utils/userRequest';

export const register = async (email, name, password, dispatch) => {
    dispatch(registerStart());
    try {
        const res = await userRequest.post('/auth/register', { email, name, password });
        dispatch(registerSuccess(res));
    } catch (error) {
        dispatch(registerFailed());
    }
};

export const login = async (email, password, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await userRequest.post('/auth/login', { email, password });
        dispatch(loginSuccess(res));
    } catch (error) {
        dispatch(loginFailed());
    }
};

export const logout = async (dispatch, token) => {
    dispatch(logoutStart());
    try {
        const res = await userRequest.post('/auth/logout', { token });
        dispatch(logoutSuccess(res));
    } catch (error) {
        dispatch(logoutFailed());
    }
};

export const updateUser = async (axiosJWT, user, accessToken, dispatch, id) => {
    dispatch(updateStart());
    try {
        const res = await axiosJWT.put(
            `/auth/${id}`,
            { ...user },
            {
                headers: { token: `Bearer ${accessToken}` },
            },
        );
        console.log(res.data);
        dispatch(updateSuccess(res.data));
    } catch (error) {
        dispatch(updateFailed());
    }
};

export const changePassword = async (axiosJWT, data, accessToken, id) => {
    try {
        const res = await axiosJWT.put(
            `/auth/changePassword/${id}`,
            { ...data },
            {
                headers: { token: `Bearer ${accessToken}` },
            },
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const forgotPassword = async (email) => {
    try {
        const res = await userRequest.post('/auth/forgot-password', { email });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const resetPassword = async (newPassword, token) => {
    try {
        const res = await userRequest.patch('/auth/reset-password', { newPassword, token });
        return res;
    } catch (error) {
        console.log(error);
    }
};
