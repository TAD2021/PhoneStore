import styles from './ForgotPassword.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as authService from '~/services/authService';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        const res = await authService.forgotPassword(email);
        res ? alert('Thành công! vui lòng kiểm tra email của bạn') : alert('Email chưa được đăng ký');
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                        </div>
                        <div>Quên mật khẩu</div>
                    </div>
                </div>
                <div className={cx('body')}>
                    <p>Gửi mã xác nhận để lấy lại mật khẩu</p>
                    <div>
                        <div>
                            <div className={cx('cps-icon')}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                            </div>
                            <div className={cx('method_content')}>
                                <p className={cx('content__name')}>Qua email</p>
                                <p className={cx('content')}>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                                </p>
                            </div>
                        </div>
                        <button onClick={handleForgotPassword} disabled={!email}>
                            Tiếp tục
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
