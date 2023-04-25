import { Fragment, useEffect, useState } from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/createInstance';
import { loginSuccess } from '~/redux/authSlice';
import * as authService from '~/services/authService';

const cx = classNames.bind(styles);

function Profile() {
    const [avatar, setAvatar] = useState();
    const user = useSelector((state) => state.auth.login.currentUser);
    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [phone, setPhone] = useState(user?.phone);
    const [address, setAddress] = useState(user?.address);
    const [specificAddress, setSpecificAddress] = useState(user?.specificAddress);
    const dispatch = useDispatch();

    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    useEffect(() => {
        //Cleanup
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };

    const handleUpdateProfile = async () => {
        const userData = {
            name,
            email,
            phone,
            address,
            specificAddress,
        };

        console.log(userData);
        const accessToken = user.accessToken;
        const value = window.confirm('Xác nhận cập nhật thông tin');
        value && (await authService.updateUser(axiosJWT, userData, accessToken, dispatch, user._id));
    };

    console.log(avatar);

    return (
        <Fragment>
            <div className={cx('header')}>
                <h2>Hồ sơ của tôi</h2>
                <div>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
            </div>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tên</td>
                                    <td>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ cụ thể</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={specificAddress}
                                            onChange={(e) => setSpecificAddress(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button className={'button-primary'} onClick={handleUpdateProfile}>
                                            Lưu
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div className={cx('choose_img')}>
                    <div className={cx('container')}>
                        <div className={cx('img')}>
                            <div
                                style={
                                    avatar
                                        ? {
                                              backgroundImage: `url(${avatar.preview})`,
                                          }
                                        : {
                                              backgroundImage: `url(https://i.pinimg.com/564x/f2/47/1b/f2471baae58bf1abc5989f92756ab0c0.jpg)`,
                                          }
                                }
                            ></div>
                        </div>
                        <button>
                            <label htmlFor="upload-photo">Chọn Ảnh</label>
                        </button>
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            id="upload-photo"
                            onChange={(e) => handlePreviewAvatar(e)}
                        ></input>
                        <div className={cx('detail')}>
                            <div>Dung lượng tối đa 1MB</div>
                            <div>Định dạng:.JPEG, .PNG</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Profile;
