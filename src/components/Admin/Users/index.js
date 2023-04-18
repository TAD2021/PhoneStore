import styles from './Users.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import * as userService from '~/services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/createInstance';
import { loginSuccess } from '~/redux/authSlice';

const cx = classNames.bind(styles);

function Users() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [allUsers, setAllUsers] = useState();
    const dispatch = useDispatch();

    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    useEffect(() => {
        const fetchData = async () => {
            const result = await userService.getAllUser(axiosJWT, user);
            setAllUsers(result);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDelete = async (e) => {
        console.log(allUsers);
        const value = window.confirm('Xác nhận xóa người dùng');
        value && (await userService.deleteUser(axiosJWT, user, allUsers[e.target.value]._id));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('product_list')}>
                    <h3>Danh sách người dùng</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Họ tên</th>
                                <th>Địa chỉ</th>
                                <th>Địa chỉ cụ thể</th>
                                <th>Số điện thoại</th>
                            </tr>

                            {allUsers &&
                                allUsers.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.email}</td>
                                        <td>{user.name}</td>
                                        <td>{user.address}</td>
                                        <td>{user.specificAddress}</td>
                                        <td>{user.phone}</td>
                                        <td className={cx('delete')}>
                                            <button
                                                className={cx('delete_icon')}
                                                value={index}
                                                onClick={(e) => handleDelete(e)}
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Users;
