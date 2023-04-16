import styles from './AdminLogin.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authService from '~/services/authService';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChangeUserName = (e) => setUsername(e.target.value);
    const handleOnChangePassword = (e) => setPassword(e.target.value);

    const handleLogin = async () => {
        await authService.login(username, password, dispatch);
        navigate('/admin/dashboard');
    };
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('modal')}>
                    <div className={cx('modal__overlay')}></div>
                    <div className={cx('modal__body')}>
                        <div className={cx('auth-form')}>
                            <div className={cx('auth-form__container')}>
                                <div className={cx('auth-form__header')}>
                                    <h3 className={cx('auth-form__heading')}>Đăng nhập Admin</h3>
                                </div>

                                <div className={cx('auth-form__form')}>
                                    <div className={cx('auth-form__group')}>
                                        <input
                                            type="text"
                                            className={cx('auth-form__input')}
                                            placeholder="Username của bạn"
                                            value={username}
                                            onChange={handleOnChangeUserName}
                                        />
                                    </div>

                                    <div className={cx('auth-form__group')}>
                                        <input
                                            type="password"
                                            className={cx('auth-form__input')}
                                            placeholder="Mật khẩu của bạn"
                                            value={password}
                                            onChange={handleOnChangePassword}
                                        />
                                    </div>
                                </div>

                                <div className={cx('auth-form__controls')}>
                                    <button className={cx('btn--normal', 'btn', 'auth-form__controls-back')}>
                                        TRỞ LẠI
                                    </button>
                                    <button className={cx('btn', 'btn--primary')} onClick={handleLogin}>
                                        ĐĂNG NHẬP
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AdminLogin;
