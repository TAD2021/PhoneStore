import styles from './ProfileModal.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { createAxios } from '~/createInstance';
import { loginSuccess } from '~/redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import * as authService from '~/services/authService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProfileModal(props) {
    const [name, setName] = useState(props.data.name || '');
    const [email, setEmail] = useState(props.data.email || '');
    const [phone, setPhone] = useState(props.data.phone || '');
    const [address, setAddress] = useState(props.data.address || '');
    const [specificAddress, setSpecificAddress] = useState(props.data.specificAddress || '');
    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();

    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    console.log(user);

    const handleUpdate = async (e) => {
        const userData = {
            name,
            email,
            phone,
            address,
            specificAddress,
        };
        const accessToken = user.accessToken;
        const value = window.confirm('Xác nhận cập nhật thông tin');
        value && (await authService.updateUser(axiosJWT, userData, accessToken, dispatch, props.data._id));
        props.callbackModal(false);
    };

    return (
        <div className={cx('modal')} onClick={() => props.callbackModal(false)}>
            <div className={cx('modal__overlay')}></div>
            <div className={cx('modal__body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <h3>Cập nhật thông tin</h3>
                            <FontAwesomeIcon
                                icon={faClose}
                                className={cx('close_icon')}
                                onClick={(e) => props.callbackModal(false)}
                            />
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tên</td>
                                    <td>
                                        <input value={name} onChange={(e) => setName(e.target.value)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ</td>
                                    <td>
                                        <input value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ cụ thể</td>
                                    <td>
                                        <input
                                            value={specificAddress}
                                            onChange={(e) => setSpecificAddress(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button className="button-primary" onClick={() => handleUpdate()}>
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

export default ProfileModal;
