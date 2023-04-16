import styles from './ResetPassword.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as authService from '~/services/authService';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ResetPassword() {
    const [email, setEmail] = useState('');

    const handleResetPassword = async () => {
        const res = await authService.resetPassword(email);

        console.log(res);
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
                        <div onClick={handleResetPassword}>Tiếp tục</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
