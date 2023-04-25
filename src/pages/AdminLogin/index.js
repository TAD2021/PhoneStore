import styles from './AdminLogin.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authService from '~/services/authService';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChangeEmail = (e) => setEmail(e.target.value);
    const handleOnChangePassword = (e) => setPassword(e.target.value);

    const user = useSelector((state) => state.auth.login.currentUser);

    const handleLogin = async () => {
        await authService.login(email, password, dispatch);
        navigate('/admin/dashboard');
    };

    useEffect(() => {
        user?.admin && navigate('/admin/dashboard');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
                                            placeholder="Email của bạn"
                                            value={email}
                                            onChange={handleOnChangeEmail}
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
