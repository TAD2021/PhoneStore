import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Fragment, useState } from 'react';
import ProfileModal from './ProfileModal';
import PasswordModal from './PasswordModal';

const cx = classNames.bind(styles);

function Profile() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [modal, setModal] = useState(false);
    const [passwordModal, setPasswordModal] = useState(false);

    const callbackModal = (childrenData) => {
        setModal(childrenData);
    };

    const callbackPasswordModal = (childrenData) => {
        setPasswordModal(childrenData);
    };

    return (
        <Fragment>
            {modal && <ProfileModal callbackModal={callbackModal} data={user} />}
            {passwordModal && <PasswordModal callbackPasswordModal={callbackPasswordModal} data={user} />}
            <div className={cx('wrapper')}>
                <h3>Thông tin cá nhân</h3>
                <div>
                    <button className={cx('update')} onClick={() => setModal(true)}>
                        Cập nhật thông tin
                    </button>
                    <button className={cx('change_password')} onClick={() => setPasswordModal(true)}>
                        Đổi mật khẩu
                    </button>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td>{user?.email}</td>
                            </tr>
                            <tr>
                                <td>Tên</td>
                                <td>{user?.name}</td>
                            </tr>
                            <tr>
                                <td>Số điện thoại</td>
                                <td>{user?.phone}</td>
                            </tr>
                            <tr>
                                <td>Địa chỉ</td>
                                <td>{user?.address}</td>
                            </tr>
                            <tr>
                                <td>Địa chỉ cụ thể</td>
                                <td>{user?.specificAddress}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
}

export default Profile;
