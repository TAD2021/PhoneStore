import styles from './ResetPassword.module.scss';
import classNames from 'classnames/bind';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import * as authService from '~/services/authService';

const cx = classNames.bind(styles);

function ResetPassword() {
    let { token } = useParams();
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        const res = await authService.resetPassword(password, token);
        if (res) {
            alert('Thành công');
            navigate('/');
        }
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
                        <div>Đặt lại mật khẩu</div>
                    </div>
                </div>

                <div className={cx('body')}>
                    <p>Nhập mật khẩu mới</p>
                    <div>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div>
                            <button onClick={handleResetPassword} disabled={!password}>
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
