import styles from './ProfileModal.module.scss';
import classNames from 'classnames/bind';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as authService from '~/services/authService';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/createInstance';
import { loginSuccess } from '~/redux/authSlice';

const cx = classNames.bind(styles);

function PasswordModal(props) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.login.currentUser);
    const token = useSelector((state) => state.auth.login.currentUser.accessToken);

    let axiosJWT = createAxios(user, dispatch, loginSuccess);

    const handleChangePassword = async () => {
        const data = {
            oldPassword,
            newPassword,
        };
        const result = await authService.changePassword(axiosJWT, data, token, user._id);
        result && window.alert('Đổi mật khẩu thành công');
        props.callbackPasswordModal(false);
    };
    return (
        <div className={cx('modal')} onClick={() => props.callbackPasswordModal(false)}>
            <div className={cx('modal__overlay')}></div>
            <div className={cx('modal__body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <h3>Đổi mật khẩu</h3>
                            <FontAwesomeIcon
                                icon={faClose}
                                className={cx('close_icon')}
                                onClick={(e) => props.callbackPasswordModal(false)}
                            />
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Mật khẩu cũ</td>
                                    <td>
                                        <input
                                            type="password"
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mật khẩu mới</td>
                                    <td>
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Xác nhận mật khẩu</td>
                                    <td>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button className="button-primary" onClick={handleChangePassword}>
                                            Lưu
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordModal;
