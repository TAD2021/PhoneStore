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
import * as httpRequest from '~/utils/httpRequest';

export const register = async (email, name, password, dispatch) => {
    dispatch(registerStart());
    try {
        const res = await httpRequest.post('user/auth/register', { email, name, password });
        dispatch(registerSuccess(res));
    } catch (error) {
        dispatch(registerFailed());
    }
};

export const login = async (email, password, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await httpRequest.post('user/auth/login', { email, password });
        dispatch(loginSuccess(res));
    } catch (error) {
        dispatch(loginFailed());
    }
};

export const logout = async (dispatch, token) => {
    dispatch(logoutStart());
    try {
        const res = await httpRequest.post('user/auth/logout', { token });
        dispatch(logoutSuccess(res));
    } catch (error) {
        dispatch(logoutFailed());
    }
};

export const updateUser = async (axiosJWT, user, accessToken, dispatch, id) => {
    dispatch(updateStart());
    try {
        const res = await axiosJWT.put(
            `user/auth/${id}`,
            { ...user },
            {
                headers: { token: `Bearer ${accessToken}` },
            },
        );
        dispatch(updateSuccess(res.data));
    } catch (error) {
        dispatch(updateFailed());
    }
};

export const changePassword = async (axiosJWT, data, accessToken, id) => {
    try {
        const res = await axiosJWT.put(
            `user/auth/changePassword/${id}`,
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
        const res = await httpRequest.post('user/auth/forgot-password', { email });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const resetPassword = async (newPassword, token) => {
    try {
        const res = await httpRequest.patch('user/auth/reset-password', { newPassword, token });
        return res;
    } catch (error) {
        console.log(error);
    }
};
