import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faSignOut,
    faStore,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Search from '../Search';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Menu from '../Popper/Menu';
import * as authService from '~/services/authService';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/users/account/profile',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: `/`,
        separate: true,
    },
];

function Header() {
    const [modal, setModal] = useState(false);
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [error, setError] = useState(false);

    const cart = useSelector((state) => state.cart.cart.length);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login);

    const handleOnChangeEmail = (e) => setEmail(e.target.value);
    const handleOnChangeName = (e) => setName(e.target.value);
    const handleOnChangePassword = (e) => setPassword(e.target.value);
    const handleOnChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);
    const handleOnChangeEmailLogin = (e) => setEmailLogin(e.target.value);
    const handleOnChangePasswordLogin = (e) => setPasswordLogin(e.target.value);

    const handleRegister = async () => {
        const regexEmail = new RegExp(/^([a-z0-9_-]+)@([\da-z-]+)\.([a-z]{2,6})$/);
        if (!regexEmail.test(email)) {
            alert('Vui lòng nhập đúng định dạng email');
            return;
        }
        if (password !== confirmPassword) {
            alert('Xác nhận mật khẩu phải trùng với mật khẩu');
            return;
        }
        await authService.register(email, name, password, dispatch);
        setRegister(false);
    };

    const handleLogin = async () => {
        await authService.login(emailLogin, passwordLogin, dispatch);
    };

    useEffect(() => {
        if (user.error) {
            setError(true);
        } else {
            setError(false);
        }
        if (user.currentUser) {
            setModal(false);
            setEmailLogin('');
            setPasswordLogin('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.isFetching]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo_search')}>
                    <Link to="/" className={cx('logo')}>
                        <img
                            src="https://media-api-beta.thinkpro.vn/media/core/site-configs/2023/3/16/logo-thinkpro.svg"
                            alt="thinkpro"
                        />
                    </Link>
                </div>
                <Search />
                <div className={cx('actions')}>
                    <Link to="/phone" className={cx('action')}>
                        <div className={cx('phone')}>
                            <FontAwesomeIcon icon={faStore} />
                        </div>
                    </Link>
                    <Link to="/cart" className={cx('action')}>
                        <div className={cx('cart')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        {cart > 0 && (
                            <div className={'button-primary ' + cx('quantity')}>
                                <span>{cart}</span>
                            </div>
                        )}
                    </Link>
                    {user.currentUser ? (
                        <Menu items={userMenu}>
                            <img
                                className={cx('user-avatar')}
                                src="https://i.pinimg.com/564x/f2/47/1b/f2471baae58bf1abc5989f92756ab0c0.jpg"
                                alt="Nguyen Van A"
                            />
                        </Menu>
                    ) : (
                        <button className={'button-primary ' + cx('action_login')} onClick={() => setModal(true)}>
                            <span>Đăng nhập</span>
                        </button>
                    )}
                </div>
            </div>

            {modal && (
                <div className={cx('modal')} onClick={() => setModal(false)}>
                    <div className={cx('modal__overlay')}></div>
                    <div className={cx('modal__body')} onClick={(e) => e.stopPropagation()}>
                        <div className={cx('auth-form')}>
                            {register ? (
                                <div className={cx('auth-form__container')}>
                                    <div className={cx('auth-form__header')}>
                                        <h3 className={cx('auth-form__heading')}>Đăng ký</h3>
                                        <span
                                            className={cx('auth-form__switch-btn')}
                                            onClick={() => setRegister(false)}
                                        >
                                            Đăng Nhập
                                        </span>
                                    </div>

                                    <div className={cx('auth-form__form')}>
                                        <div className={cx('auth-form__group')}>
                                            <input
                                                type="email"
                                                className={cx('auth-form__input')}
                                                placeholder="Email của bạn"
                                                value={email}
                                                onChange={handleOnChangeEmail}
                                            />
                                        </div>

                                        <div className={cx('auth-form__group')}>
                                            <input
                                                type="text"
                                                className={cx('auth-form__input')}
                                                placeholder="Họ và tên của bạn"
                                                value={name}
                                                onChange={handleOnChangeName}
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

                                        <div className={cx('auth-form__group')}>
                                            <input
                                                type="password"
                                                className={cx('auth-form__input')}
                                                placeholder="Nhập lại mật khẩu"
                                                value={confirmPassword}
                                                onChange={handleOnChangeConfirmPassword}
                                            />
                                        </div>
                                    </div>

                                    <div className={cx('auth-form__aside')}>
                                        <p className={cx('auth-form__policy-text')}>
                                            <span>Bằng việc đăng ký, bạn đã đồng ý với ThinkPro về </span>
                                            <Link to="" className={cx('auth-form__text-link')}>
                                                Điều khoản dịch vụ
                                            </Link>
                                            <span> &#38; </span>
                                            <Link to="" className={cx('auth-form__text-link')}>
                                                Chính sách bảo mật
                                            </Link>
                                        </p>
                                    </div>

                                    <div className={cx('auth-form__controls')}>
                                        <button
                                            className={cx('btn--normal', 'btn', 'auth-form__controls-back')}
                                            onClick={() => setModal(false)}
                                        >
                                            TRỞ LẠI
                                        </button>
                                        <button
                                            className={cx('btn', 'btn--primary')}
                                            disabled={!password || !email || !confirmPassword}
                                            onClick={handleRegister}
                                        >
                                            ĐĂNG KÝ
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className={cx('auth-form__container')}>
                                    <div className={cx('auth-form__header')}>
                                        <h3 className={cx('auth-form__heading')}>Đăng nhập</h3>
                                        <span className={cx('auth-form__switch-btn')} onClick={() => setRegister(true)}>
                                            Đăng Ký
                                        </span>
                                    </div>

                                    <div className={cx('auth-form__form')}>
                                        <div
                                            className={cx('auth-form__error')}
                                            style={error ? { display: 'flex' } : { display: 'none' }}
                                        >
                                            <div className={cx('auth-form__error-icon')}>
                                                <FontAwesomeIcon icon={faCircleXmark} className={cx('icon')} />
                                            </div>
                                            <div className={cx('auth-form__error-text')}>
                                                <div>
                                                    Đăng nhập KHÔNG thành công. Bạn vui lòng thử lại hoặc đăng nhập bằng
                                                    cách khác nhé!
                                                </div>
                                            </div>
                                        </div>

                                        <div className={cx('auth-form__group')}>
                                            <input
                                                type="text"
                                                className={cx('auth-form__input')}
                                                placeholder="Email của bạn"
                                                value={emailLogin}
                                                onChange={handleOnChangeEmailLogin}
                                            />
                                        </div>
                                        <div className={cx('auth-form__group')}>
                                            <input
                                                type="password"
                                                className={cx('auth-form__input')}
                                                placeholder="Mật khẩu của bạn"
                                                value={passwordLogin}
                                                onChange={handleOnChangePasswordLogin}
                                            />
                                        </div>
                                    </div>

                                    <div className={cx('auth-form__aside')}>
                                        <div className={cx('auth-form__help')}>
                                            <Link
                                                to=""
                                                className={cx('auth-form__help-link', 'auth-form__help-forgot')}
                                            >
                                                Quên mật khẩu
                                            </Link>
                                            <span className={cx('auth-form__help-separate')}></span>
                                            <Link to="" className={cx('auth-form__help-link')}>
                                                Cần trợ giúp ?
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={cx('auth-form__controls')}>
                                        <button
                                            className={cx('btn--normal', 'btn', 'auth-form__controls-back')}
                                            onClick={() => setModal(false)}
                                        >
                                            TRỞ LẠI
                                        </button>
                                        <button
                                            className={cx('btn', 'btn--primary')}
                                            onClick={handleLogin}
                                            disabled={!emailLogin || !passwordLogin}
                                        >
                                            ĐĂNG NHẬP
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div className={cx('auth-form__socials')}>
                                <Link
                                    to=""
                                    className={cx(
                                        'auth-form__socials--facebook',
                                        'btn',
                                        'btn--size-s',
                                        'btn--width-icon',
                                    )}
                                >
                                    <FontAwesomeIcon className={cx('auth-form__socials-icon')} icon={faFacebook} />
                                    <div className={cx('auth-form__socials-title')}>Kết nối với Facebook</div>
                                </Link>

                                <Link
                                    to=""
                                    className={cx(
                                        'auth-form__socials--google',
                                        'btn',
                                        'btn--size-s',
                                        'btn--width-icon',
                                    )}
                                >
                                    <FontAwesomeIcon className={cx('auth-form__socials-icon')} icon={faGoogle} />
                                    <div className={cx('auth-form__socials-title')}>Kết nối với Google</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
