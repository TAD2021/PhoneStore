export const getAllUser = async (axiosJWT, user) => {
    try {
        const res = await axiosJWT.get(`/user`, {
            headers: { token: `Bearer ${user.accessToken}` },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = async (axiosJWT, user, id) => {
    try {
        const res = await axiosJWT.delete(`/user/${id}`, {
            headers: { token: `Bearer ${user.accessToken}` },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
