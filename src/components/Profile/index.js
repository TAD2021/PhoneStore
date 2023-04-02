import { Fragment, useEffect, useState } from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Profile() {
    const [avatar, setAvatar] = useState();

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
                                    <td>Tên đăng nhập</td>
                                    <td>Thongle</td>
                                </tr>
                                <tr>
                                    <td>Tên</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>thongle6636@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>0962922420</td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ</td>
                                    <td>50/15 Lê Thị Hồng, P17, Q.Gò Vấp</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button className={'button-primary'}>Lưu</button>
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
