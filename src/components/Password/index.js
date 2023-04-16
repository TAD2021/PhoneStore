import styles from './Password.module.scss';
import classNames from 'classnames/bind';
import { Fragment } from 'react';
import * as authService from '~/services/authService';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/createInstance';
import { loginSuccess } from '~/redux/authSlice';
const cx = classNames.bind(styles);

function Password() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.login.currentUser);
    const token = useSelector((state) => state.auth.login.currentUser?.accessToken);

    let axiosJWT = createAxios(user, dispatch, loginSuccess);

    const handleChangePassword = async () => {
        const data = {
            oldPassword,
            newPassword,
        };
        const result = await authService.changePassword(axiosJWT, data, token, user._id);
        result && window.alert('Đổi mật khẩu thành công');
    };
    return (
        <Fragment>
            <div className={cx('header')}>
                <h2>Đổi mật khẩu</h2>
                <div>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</div>
            </div>
            <div className={cx('body')}>
                <div className={cx('inner')}>
                    <form>
                        <div className={cx('currentPassword')}>
                            <div>
                                <div>
                                    <div>
                                        <label>Mật khẩu hiện tại</label>
                                    </div>
                                    <div className={cx('input')}>
                                        <input
                                            type="password"
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                        />
                                    </div>
                                    <button>Quên mật khẩu ?</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <label>Mật khẩu mới</label>
                                    </div>
                                    <div className={cx('input')}>
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <label>Xác nhận mật khẩu</label>
                                    </div>
                                    <div className={cx('input')}>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div></div>
                                    <div className={cx('input')}>
                                        <button onClick={handleChangePassword}>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Password;
